export interface Confirmed {
  id: string;
  date: string;
  healthCareDistrict: string;
  infectionSourceCountry: string | null;
  infectionSource: string;
  [key: string]: string | null;
}

export interface Death {
  id: string;
  date: string;
  healthCareDistrict: string;
  [key: string]: string;
}

export interface Recovered {
  id: string;
  date: string;
  healthCareDistrict: string;
  [key: string]: string;
}

export interface Data {
  confirmed: Confirmed[];
  deaths: Death[];
  recovered: Recovered[];
}

export interface XAndY {
  x: string | number | null;
  y: number;
}

export type DataItem = Confirmed | Death | Recovered;

export type DataInXAndY = {
  confirmed: XAndY[];
  deaths: XAndY[];
  recovered: XAndY[];
};
