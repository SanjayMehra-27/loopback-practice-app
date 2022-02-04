import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

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
@lifeCycleObserver('datasource')
export class TestDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'testDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.testDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
