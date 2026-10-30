import type { GuideContent } from "../../types";
import ar from "./remove-location-from-photos-iphone.ar.json";
import he from "./remove-location-from-photos-iphone.he.json";
import id from "./remove-location-from-photos-iphone.id.json";
import ko from "./remove-location-from-photos-iphone.ko.json";
import pl from "./remove-location-from-photos-iphone.pl.json";
import ro from "./remove-location-from-photos-iphone.ro.json";
import ru from "./remove-location-from-photos-iphone.ru.json";
import th from "./remove-location-from-photos-iphone.th.json";
import vi from "./remove-location-from-photos-iphone.vi.json";
import zhHans from "./remove-location-from-photos-iphone.zh-Hans.json";

/**
 * ar he id ko pl ro ru th vi zh-Hans: yalnız bu iki iPhone makalesi bu dillerde var.
 * Dosyalar ayrı JSON; ana makale dosyası 8 dilin satır içi metnini taşımaya devam eder.
 */
export const translations: Record<string, GuideContent> = { ar, he, id, ko, pl, ro, ru, th, vi, "zh-Hans": zhHans };
