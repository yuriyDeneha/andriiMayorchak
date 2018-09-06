import { GggModule } from './ggg.module';

describe('GggModule', () => {
  let gggModule: GggModule;

  beforeEach(() => {
    gggModule = new GggModule();
  });

  it('should create an instance', () => {
    expect(gggModule).toBeTruthy();
  });
});
