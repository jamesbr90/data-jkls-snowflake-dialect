import * as Bluebird from "bluebird";
import knex, { Knex } from "knex";
import { QueryCompiler } from "./query/QueryCompiler";
import { SchemaCompiler, TableCompiler } from "./schema";
declare class SnowflakeDialect extends knex.Client {
    constructor(config?: any);
    transaction(container: any, config: any, outerTx: any): Knex.Transaction;
    queryCompiler(builder: any): QueryCompiler;
    columnBuilder(tableBuilder: any, type: any, args: any): any;
    columnCompiler(tableCompiler: any, columnBuilder: any): any;
    tableCompiler(tableBuilder: any): TableCompiler;
    schemaCompiler(builder: any): SchemaCompiler;
    _driver(): any;
    acquireRawConnection(): Promise<unknown>;
    destroyRawConnection(connection: any): Promise<void>;
    validateConnection(connection: any): Promise<boolean>;
    _query(connection: any, obj: any): Bluebird<unknown>;
    processResponse(obj: any, runner: any): any;
    postProcessResponse(result: any, queryContext: any): any;
    customWrapIdentifier(value: any, origImpl: any, queryContext: any): any;
}
export { SnowflakeDialect };
