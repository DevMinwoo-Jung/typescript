{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  // page를 key로 쓰고 pageInfo를 value로!
  const nav: Record<Page, PageInfo> = {
    home: {title: 'Home'},
    about: {title: 'about'},
    contact: {title: 'ah'},
  };
}