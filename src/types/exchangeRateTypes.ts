export interface IResponseRateDTO {
  result: 'success' | 'error';
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: IConversionRatesData;
  'error-type'?: string;
  'extra-info'?: string;
}

export interface IConversionRatesData {
  [p: string]: number;
}
