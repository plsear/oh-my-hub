angular.module("ohmyhub.projecthub.home",["ohmyhub.common","ui.router"]).config(["$stateProvider",function(e){return e.state("projecthub_home",{title:"Project Hub - Home",url:"/projecthub/home",hub:{name:"Project Hub",root:"/projecthub"},controller:"ProjectHubHomeCtrl",templateUrl:"app/projecthub/home/home.html"})}]).controller("ProjectHubHomeCtrl",["$scope","HubMenu","FiltersStore","$firebase",function(e,t,o,r){var n,c;return e.filters=o.get(),e.icon_css={Android:"android",iOS:"apple",WP:"windows","Firefox OS":"mobile",Mac:"apple",Linux:"linux",Windows:"windows",Firefox:"browser",Chrome:"browser",Safari:"browser",API:"setting",Document:"text file",Media:"bullhorn",Web:"laptop",Data:"dashboard"},e.projects=[],e.alerts=null,n=new Firebase("https://g0v-project-hub.firebaseio.com/projects"),c=r(n),e.projects=c.$asArray(),e.projects.$loaded().then(function(){var o,r,n,c;return o=t.create(e.projects,["category","tag","tool","license"]),r=o[0],n=o[1],c=o[2],e.$parent.menu=r,e.category=Object.keys(e.menu.category),e.license=Object.keys(e.menu.license),e.tools=Object.keys(e.menu.tool),e.status=["Production","In progress","In Ideas"],e.needs=["開發人員","設計師","行銷人員","數據分析"],e.$parent.counts=n,e.$parent.toggle=c.toggle,e.toggle.detail=!1}),e.showDetail=function(t){var o;return e.toggle.detail=!0,o=e.projects.indexOf(t),e.index=o},e.addProject=function(){return e.projects.$add({hello:"motto"}),e.index=e.projects.length,e.toggle.detail=!0},e.getGithubUrl=function(e){var t,o,r,n;if("undefined"!=typeof e.workspace)for(t=0,r=(o=e.workspace).length;r>t;++t)if(n=o[t],n.url.search(/github.com/i)>0)return n.url;return null}}]);