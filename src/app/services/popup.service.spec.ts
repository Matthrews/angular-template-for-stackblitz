import { PopupService } from './popup.service';
import { SignInComponent } from '../components/signin/signin.component';

describe('PopupService', () => {
  let service: PopupService;
  // создаем экземпляр PopupService
  beforeEach(() => { service = new PopupService(); });
  // done нужно, чтобы тест не завершился до получения данных
  it('subscribe for opening works', (done: DoneFn) => {
    // вызываем метод open
    service.open(SignInComponent, [{title: 'Попап заголовок', message: 'Успешно'}]);
    // при изменении значения popupDialog$ должен сработать subscribe
    service.popupDialog$.subscribe((data) => {
      expect(data.popupEvent).toBe('open');
      done();
    });

  });
  it('subscribe for closing works', (done: DoneFn) => {
    service.close();
    service.popupDialog$.subscribe((data) => {
      expect(data.popupEvent).toBe('close');
      done();
    });
  });
});
