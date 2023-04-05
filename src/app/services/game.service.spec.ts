import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StatisticsService } from './statistics.service';

import 'rxjs/add/observable/of';

describe('GameService', () => {
  let http: HttpTestingController;
  let service: GameService;
  let statisticsService: StatisticsService;
  const statisticsServiceStub = {
    send: () => {}
  };

  const expectedData = [
    {id: '1', name: 'FirstGame', locale: 'ru', type: '2'},
    {id: '2', name: 'SecondGame', locale: 'ru', type: '3'},
    {id: '3', name: 'LastGame',  locale: 'en', type: '1'},
  ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [GameService, { provide: StatisticsService, useValue: statisticsServiceStub }]
    });

    service = TestBed.get(GameService);
    statisticsService = TestBed.get(StatisticsService);
    http = TestBed.get(HttpTestingController);


  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have made one request to GET data from expected URL', () => {

    service.makeResponse().subscribe((data) => {
      expect(data).toEqual(expectedData);
    });

    const req = http.expectOne(service.gamesUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData);
  });


  it('getGames should emits gameData', () => {

    service.getGames();

    service.dataChange.subscribe((data) => {
      expect(data).toEqual(expectedData);
    });

    const req = http.expectOne(service.gamesUrl);
    req.flush(expectedData);

  });

  it('statistics should be sent', () => {
    const statisticsSpy = jest.spyOn(statisticsService, 'send');
    service.handleGameData(expectedData);
     expect(statisticsSpy).toHaveBeenCalled();
  });


});
