# Bear

This is a dummy project design to illustrate how to implement mutation testing with Stryker and Docker. For more information check [this blog post](https://hndoss.github.io/mutation-testing-with-stryker-and-docker/).

- Install dependencies.
    ```
    $ npm install
    ```
- Run a docker container to get reports.
    ```
    docker run \
        -v $(pwd):/srv \
        -w /srv \
        --rm -ti \
        hndoss/stryker-js:11-alpine run
    ```
- Check the results.
    ```
    Ran all tests for this mutant.
    Ran 0.80 tests per mutant on average.
    -----------------------|---------|----------|-----------|------------|----------|---------|
    File                   | % score | # killed | # timeout | # survived | # no cov | # error |
    -----------------------|---------|----------|-----------|------------|----------|---------|
    All files              |   46.67 |        4 |         3 |          8 |        0 |       0 |
    app.component.spec.ts  |   46.67 |        4 |         3 |          8 |        0 |       0 |
    -----------------------|---------|----------|-----------|------------|----------|---------|
    15:53:38 (1) INFO DashboardReporter Dashboard report is not sent when not running on a build server
    15:53:38 (1) INFO HtmlReporter Your report can be found at: file:///srv/reports/mutation/html/index.html
    15:53:38 (1) INFO Stryker Done in 28 seconds.
    ```

---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.