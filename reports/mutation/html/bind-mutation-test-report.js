document.querySelector('mutation-test-report-app').report = {"files":{"/srv/src/app/app.component.spec.ts":{"language":"typescript","mutants":[{"id":"1","location":{"end":{"column":2,"line":35},"start":{"column":32,"line":5}},"mutatorName":"Block","replacement":"{}","status":"Killed"},{"id":"8","location":{"end":{"column":35,"line":23},"start":{"column":6,"line":23}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"9","location":{"end":{"column":4,"line":27},"start":{"column":43,"line":23}},"mutatorName":"Block","replacement":"{}","status":"Survived"},{"id":"11","location":{"end":{"column":39,"line":29},"start":{"column":6,"line":29}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"0","location":{"end":{"column":24,"line":5},"start":{"column":10,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"7","location":{"end":{"column":4,"line":21},"start":{"column":37,"line":17}},"mutatorName":"Block","replacement":"{}","status":"Survived"},{"id":"6","location":{"end":{"column":29,"line":17},"start":{"column":6,"line":17}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"10","location":{"end":{"column":37,"line":26},"start":{"column":31,"line":26}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"},{"id":"2","location":{"end":{"column":4,"line":15},"start":{"column":26,"line":6}},"mutatorName":"Block","replacement":"{}","status":"Killed"},{"id":"5","location":{"end":{"column":8,"line":13},"start":{"column":21,"line":11}},"mutatorName":"ArrayLiteral","replacement":"[]","status":"Killed"},{"id":"4","location":{"end":{"column":8,"line":10},"start":{"column":16,"line":8}},"mutatorName":"ArrayLiteral","replacement":"[]","status":"Killed"},{"id":"3","location":{"end":{"column":6,"line":14},"start":{"column":36,"line":7}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Killed"},{"id":"12","location":{"end":{"column":4,"line":34},"start":{"column":47,"line":29}},"mutatorName":"Block","replacement":"{}","status":"Survived"},{"id":"14","location":{"end":{"column":82,"line":33},"start":{"column":64,"line":33}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"13","location":{"end":{"column":39,"line":33},"start":{"column":35,"line":33}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed"}],"source":"import { TestBed, async } from '@angular/core/testing';\nimport { RouterTestingModule } from '@angular/router/testing';\nimport { AppComponent } from './app.component';\n\ndescribe('AppComponent', () => {\n  beforeEach(async(() => {\n    TestBed.configureTestingModule({\n      imports: [\n        RouterTestingModule\n      ],\n      declarations: [\n        AppComponent\n      ],\n    }).compileComponents();\n  }));\n\n  it('should create the app', () => {\n    const fixture = TestBed.createComponent(AppComponent);\n    const app = fixture.debugElement.componentInstance;\n    expect(app).toBeTruthy();\n  });\n\n  it(`should have as title 'bear'`, () => {\n    const fixture = TestBed.createComponent(AppComponent);\n    const app = fixture.debugElement.componentInstance;\n    expect(app.title).toEqual('bear');\n  });\n\n  it('should render title in a h1 tag', () => {\n    const fixture = TestBed.createComponent(AppComponent);\n    fixture.detectChanges();\n    const compiled = fixture.debugElement.nativeElement;\n    expect(compiled.querySelector('h1').textContent).toContain('Welcome to bear!');\n  });\n});\n"}},"schemaVersion":"1.0","thresholds":{"break":null,"high":80,"low":60}};