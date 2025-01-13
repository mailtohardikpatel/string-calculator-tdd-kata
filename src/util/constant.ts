export const DELIMETER_SEARCH_VALUE: RegExp = /[.*+?^${}()|[\]\\]/g;
export const DELIMETER_REPLACE_VALUE: string = "\\$&";
export const CUSTOM_DELIMETERS_MATCH: RegExp = /^\/\/(.*?)\n/; 
export const EXTRACT_DELIMETERS: RegExp = /\[([^\]]+)\]/g;