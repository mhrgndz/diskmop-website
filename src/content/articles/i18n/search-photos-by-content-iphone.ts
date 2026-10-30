import type { GuideContent } from "../../types";
import ar from "./search-photos-by-content-iphone.ar.json";
import he from "./search-photos-by-content-iphone.he.json";
import id from "./search-photos-by-content-iphone.id.json";
import ko from "./search-photos-by-content-iphone.ko.json";
import pl from "./search-photos-by-content-iphone.pl.json";
import ro from "./search-photos-by-content-iphone.ro.json";
import ru from "./search-photos-by-content-iphone.ru.json";
import th from "./search-photos-by-content-iphone.th.json";
import vi from "./search-photos-by-content-iphone.vi.json";
import zhHans from "./search-photos-by-content-iphone.zh-Hans.json";

/**
 * ar he id ko pl ro ru th vi zh-Hans: yalnız bu iki iPhone makalesi bu dillerde var.
 * Dosyalar ayrı JSON; ana makale dosyası 8 dilin satır içi metnini taşımaya devam eder.
 */
export const translations: Record<string, GuideContent> = { ar, he, id, ko, pl, ro, ru, th, vi, "zh-Hans": zhHans };
