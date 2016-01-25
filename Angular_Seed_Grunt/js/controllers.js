// controller.js
angular
    .module('app')
    .controller('languageCtrl', languageCtrl);

languageCtrl.$inject = ['$translate', '$scope'];
function languageCtrl($translate, $scope) {
    function checkLanguage(languages, langKey) {
        languages.map(function (language) {
            if (language.langKey == langKey) {

                console.log(language);
                $scope.flag = language.flag;
                $scope.lang = language.lang;
                return language
            } else {

                return null
            }
        });
    }

    var languages = [
        {
            lang: 'Polish',
            langKey: 'pl',
            flag: 'Poland.png'
        },
        {
            lang: 'English',
            langKey: 'en',
            flag: 'United-Kingdom.png'
        },
        {
            lang: 'Español',
            langKey: 'es',
            flag: 'Spain.png'
        }
    ]
    $scope.languages = languages;
    console.log($translate.use());
    checkLanguage(languages, $translate.use())
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
        checkLanguage(languages, langKey)
    };
}
