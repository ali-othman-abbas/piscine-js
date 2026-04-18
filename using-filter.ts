const filterShortStateName = (arr: string[]) =>
  arr.filter((ele) => ele.length < 7);

const vowels = new Set(["a", "e", "i", "o", "u"]);
const filterStartVowel = (arr: string[]) =>
  arr.filter((ele) => vowels.has(ele[0]?.toLowerCase()!));

const filter5Vowels = (arr: string[]) =>
  arr.filter((ele) => {
    let count = 0;
    Array.from(ele).forEach(
      (char) => vowels.has(char.toLowerCase()) && count++,
    );
    return count >= 5;
  });

const filter1DistinctVowel = (arr: string[]) =>
  arr.filter((ele) => {
    const distinctVowls = new Set();
    Array.from(ele).forEach(
      (char) =>
        vowels.has(char.toLowerCase()) && distinctVowls.add(char.toLowerCase()),
    );
    return distinctVowls.size === 1;
  });

const multiFilter = (arr: Record<string, string>[]) =>
  arr.filter(
    (ele) =>
      ele["capital"]?.length! >= 8 &&
      !vowels.has(ele["name"]![0]!.toLowerCase()) &&
      Array.from(ele["tag"]!).filter((char) => vowels.has(char.toLowerCase()))
        .length >= 1 &&
      ele["region"] !== "South",
  );
