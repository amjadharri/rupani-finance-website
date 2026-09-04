/**
 * States We Fund — 02 / All 50 States.
 *
 * The board draws the states twice: as a tile map and as an alphabetical list.
 * Both come from this one table so they cannot fall out of step, and the tile
 * map's row/column pair is the position the designer placed each tile at rather
 * than anything computed from geography.
 */
export interface State {
  abbr: string;
  name: string;
  /** 1-indexed position in the 11-column tile map. */
  row: number;
  column: number;
}

export const TILE_COLUMNS = 11;
export const TILE_ROWS = 9;

export const states: readonly State[] = [
  { abbr: "ME", name: "Maine", row: 1, column: 11 },

  { abbr: "VT", name: "Vermont", row: 2, column: 10 },
  { abbr: "NH", name: "New Hampshire", row: 2, column: 11 },

  { abbr: "AK", name: "Alaska", row: 3, column: 1 },
  { abbr: "WI", name: "Wisconsin", row: 3, column: 6 },
  { abbr: "NY", name: "New York", row: 3, column: 9 },
  { abbr: "MA", name: "Massachusetts", row: 3, column: 10 },
  { abbr: "RI", name: "Rhode Island", row: 3, column: 11 },

  { abbr: "WA", name: "Washington", row: 4, column: 2 },
  { abbr: "ID", name: "Idaho", row: 4, column: 3 },
  { abbr: "MT", name: "Montana", row: 4, column: 4 },
  { abbr: "ND", name: "North Dakota", row: 4, column: 5 },
  { abbr: "MN", name: "Minnesota", row: 4, column: 6 },
  { abbr: "IL", name: "Illinois", row: 4, column: 7 },
  { abbr: "MI", name: "Michigan", row: 4, column: 8 },
  { abbr: "PA", name: "Pennsylvania", row: 4, column: 9 },
  { abbr: "NJ", name: "New Jersey", row: 4, column: 10 },
  { abbr: "CT", name: "Connecticut", row: 4, column: 11 },

  { abbr: "OR", name: "Oregon", row: 5, column: 2 },
  { abbr: "NV", name: "Nevada", row: 5, column: 3 },
  { abbr: "WY", name: "Wyoming", row: 5, column: 4 },
  { abbr: "SD", name: "South Dakota", row: 5, column: 5 },
  { abbr: "IA", name: "Iowa", row: 5, column: 6 },
  { abbr: "IN", name: "Indiana", row: 5, column: 7 },
  { abbr: "OH", name: "Ohio", row: 5, column: 8 },
  { abbr: "VA", name: "Virginia", row: 5, column: 9 },
  { abbr: "MD", name: "Maryland", row: 5, column: 10 },
  { abbr: "DE", name: "Delaware", row: 5, column: 11 },

  { abbr: "CA", name: "California", row: 6, column: 2 },
  { abbr: "UT", name: "Utah", row: 6, column: 3 },
  { abbr: "CO", name: "Colorado", row: 6, column: 4 },
  { abbr: "NE", name: "Nebraska", row: 6, column: 5 },
  { abbr: "MO", name: "Missouri", row: 6, column: 6 },
  { abbr: "KY", name: "Kentucky", row: 6, column: 7 },
  { abbr: "WV", name: "West Virginia", row: 6, column: 8 },
  { abbr: "NC", name: "North Carolina", row: 6, column: 9 },

  { abbr: "AZ", name: "Arizona", row: 7, column: 3 },
  { abbr: "NM", name: "New Mexico", row: 7, column: 4 },
  { abbr: "KS", name: "Kansas", row: 7, column: 5 },
  { abbr: "AR", name: "Arkansas", row: 7, column: 6 },
  { abbr: "TN", name: "Tennessee", row: 7, column: 7 },
  { abbr: "SC", name: "South Carolina", row: 7, column: 8 },

  { abbr: "OK", name: "Oklahoma", row: 8, column: 5 },
  { abbr: "LA", name: "Louisiana", row: 8, column: 6 },
  { abbr: "MS", name: "Mississippi", row: 8, column: 7 },
  { abbr: "AL", name: "Alabama", row: 8, column: 8 },
  { abbr: "GA", name: "Georgia", row: 8, column: 9 },

  { abbr: "HI", name: "Hawaii", row: 9, column: 1 },
  { abbr: "TX", name: "Texas", row: 9, column: 4 },
  { abbr: "FL", name: "Florida", row: 9, column: 10 },
];

/** The alphabetical grid under the tile map. */
export const statesAlphabetical = [...states].sort((a, b) => a.name.localeCompare(b.name));
