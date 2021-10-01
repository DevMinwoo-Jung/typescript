{

  // Enum - 상수 여러개를 한곳에!

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1});
  const dayOfToday = DAYS_ENUM.MONDAY;
  
  // TypeScript
  enum Days{
    Monday, // 0
    Tuesday, // 1
    Wednsday, // 2
    Thursday, // 3... 값을 정하지 않는다면 0부터 하나씩 늘어난다! 만약 처음을 1로 정하고 나머지를 정하지 않으면 1부터 하나씩 증가
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Tuesday);
  let day:Days = Days.Saturday;
  console.log(day);
  // 근데 타입스크립트는 enum을 쓰는게 별로 좋지는 않다
  day = Days.Tuesday;
  day = 10;
  console.log(day);
  // 그래서 그냥 Union을 쓰는게 낫다
  type DaysofWeek = 'Monday' | 'Tuesday' | 'Wednsday';

  let dayOfWeek: DaysofWeek = 'Tuesday';
  // dayOfWeek = 'eliie'; enum과는 다르게 compiler에서 오류를 알려준다!
}