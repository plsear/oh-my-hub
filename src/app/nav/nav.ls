angular.module 'OhMyHub.nav', <[
  ui.router
]>

.factory 'NavFilters', ->
  filters = do
    attributes:  []
    search_text: null

  do
    get: -> filters

.factory 'NavMenu', ->
  menu = {}
  counts = {}
  toggle = do
    switcher: true
  do
    create: (projects) ->
      for project in projects
        for attrname in <[category type tag tool license]>
          toggle[attrname] = false
          attrval = project[attrname] or []
          unless menu[attrname]?
            menu[attrname] = {}
            counts[attrname] = 0
          for val in attrval
            unless menu[attrname][val]?
              menu[attrname][val] = 1
            else
              menu[attrname][val] += 1
            if menu[attrname]
              counts[attrname] = Object.keys menu[attrname] .length
      return [menu, counts, toggle]

.controller \NavCtrl, ($scope, $location, NavMenu, NavFilters, Projects) ->
  $scope.filters = NavFilters.get!
  projects <- Projects.get!
  [menu, counts, toggle] = NavMenu.create projects
  $scope.counts = counts
  $scope.menu = menu
  $scope.toggle = toggle

  $scope.goto = ->
    $location.path it
