const lodashProps = `
  map: LodashPath
  keyBy: LodashPath
  each: LodashOperations

  # Creates an array of elements split into groups the length of size.
  # If array can't be split evenly, the final chunk will be the remaining elements.
  chunk: Int

  # Creates a slice of array with n elements dropped from the beginning.
  drop: Int

  # Creates a slice of array with n elements dropped from the end.
  dropRight: Int

  # Creates a slice of array with n elements taken from the beginning.
  take: Int

  # Creates a slice of array with n elements taken from the end.
  takeRight: Int

  # Recursively flatten array up to depth times.
  flattenDepth: Int

  # The inverse of \`toPairs\`; this method returns an object composed from key-value
  # pairs.
  fromPairs: DummyArgument

  # Gets the element at index n of array. If n is negative, the nth element from
  # the end is returned.
  nth: Int

  # Reverses array so that the first element becomes the last, the second element
  # becomes the second to last, and so on.
  reverse: DummyArgument

  # Creates a duplicate-free version of an array, in which only the first occurrence
  # of each element is kept. The order of result values is determined by the order
  # they occur in the array.
  uniq: DummyArgument

  uniqBy: LodashPath

  countBy: LodashPath
  filter: LodashJSON
  reject: LodashJSON
  filterIf: Predicate
  rejectIf: Predicate
  groupBy: LodashPath
  sortBy: [LodashPath!]

  minBy: LodashPath
  maxBy: LodashPath
  meanBy: LodashPath
  sumBy: LodashPath

  # Converts all elements in array into a string separated by separator.
  join: String

  get: LodashPath
  mapValues: LodashPath

  # Creates an array of values corresponding to paths of object.
  at: [LodashPath!]
  # Creates an array of own enumerable string keyed-value pairs for object.
  toPairs: DummyArgument

  # Creates an object composed of the inverted keys and values of object.
  # If object contains duplicate values, subsequent values overwrite property
  # assignments of previous values.
  invert: DummyArgument

  invertBy: LodashPath
  # Creates an array of the own enumerable property names of object.
  keys: DummyArgument
  # Creates an array of the own enumerable string keyed property values of object.
  values: DummyArgument
`;

export const lodashIDL = `
scalar LodashPath
scalar LodashJSON

enum DummyArgument {
  none
}

input Predicate {
  lt: LodashJSON
  lte: LodashJSON
  gt: LodashJSON
  gte: LodashJSON
  eq: LodashJSON
  startsWith: String
  endsWith: String
  and: [Predicate!]
  or: [Predicate!]
${lodashProps}
}

directive @_(
${lodashProps}
) on FIELD | QUERY

input LodashOperations {
${lodashProps}
}
`;
