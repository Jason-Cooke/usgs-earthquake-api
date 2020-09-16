declare const u: u.EarthquakeApi

declare namespace u {
  interface EarthquakeApi {
    version: VersionApi,
    application: ApplicationApi,
    applicationWadl: ApplicationWadlApi,
    catalogs: CatalogApi,
    contributors: ContributorsApi,
    count: CountApi,
    query: QueryApi
  }

  type ApplicationApiResponse = {
    "catalogs": Array<string>
    "contributors": Array<string>,
    "producttypes": Array<string>,
    "eventtypes": Array<string>,
    "magnitudetypes": Array<string>
  }

  interface ApplicationApi {
    getInterfaceParameters(): Promise<ApplicationApiResponse>
  }

  interface ApplicationWadlApi {
    getWadl(): Promise<any>
  }

  interface CatalogApi {
    getCatalogs(): Promise<any>
  }

  interface ContributorsApi {
    getContributors(): Promise<any>
  }

  interface CountApi {
    getCount(): Promise<any>
  }

  interface QueryApi {
    earthquakes(): Promise<any>
  }

  interface VersionApi {
    getVersion(): Promise<any>
  }
}

export = u