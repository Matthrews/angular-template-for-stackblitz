import { TestBed, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PopupService } from './services/popup.service';
describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let popup: PopupService;
  const popupServiceStub = {
    open: () => {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{provide: PopupService, useValue: popupServiceStub } ]
    });
  });

  beforeEach(() => {
    popup = TestBed.get(PopupService);
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create the comp', () => {
    expect(comp).toBeTruthy();
  });
  it(`should have as title 'app'`, () => {
    expect(comp.title).toEqual('app');
  });
  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
      .toContain('Welcome to app!');
  });

  it('should called open', () => {
    const openSpy = jest.spyOn(popup, 'open');
    fixture.detectChanges();
    expect(openSpy).toHaveBeenCalled();
  });

});
