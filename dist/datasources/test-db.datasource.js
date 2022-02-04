"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'testDB',
    connector: 'mysql',
    url: '',
    host: 'db-aws-mysql-learning-27.cougydgmsgof.ap-south-1.rds.amazonaws.com',
    port: 3306,
    user: 'sanjay_admin_27',
    password: 'Sanjay27aws',
    database: 'testDB'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let TestDbDataSource = class TestDbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
TestDbDataSource.dataSourceName = 'testDB';
TestDbDataSource.defaultConfig = config;
TestDbDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.testDB', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], TestDbDataSource);
exports.TestDbDataSource = TestDbDataSource;
//# sourceMappingURL=test-db.datasource.js.map