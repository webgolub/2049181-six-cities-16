const MainPageSettings = {
  CardsCount: 5
};

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

export {
  MainPageSettings,
  AuthorizationStatus,
  AppRoute
};
