export default class LocaleResolver {
    static resolve(language: string) {
        switch(language) {
            case 'en': return { language: 'en', country: 'EN', arr: ["en", "EN"] };
            case 'pl': return { language: 'pl', country: 'PL', arr: ["pl", "PL"] };
            default: return { language: 'en', country: 'EN', arr: ["en", "EN"] };
        }
    }
}