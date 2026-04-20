type Inc<N extends number> = [...BuildTuple<N>, unknown]['length'];

type BuildTuple<N extends number, T extends unknown[] = []> =
  T['length'] extends N ? T : BuildTuple<N, [...T, unknown]>;

type AllSubSets<
  T extends string[],
  U extends number = 0
> =
  U extends T['length']
    ? []
    : AllSubSets<T, Inc<U>> | [T[U], ...AllSubSets<T, Inc<U>>];

    
    
    
    
    
type Abc = AllSubSets<['a', 'b', 'c']>
