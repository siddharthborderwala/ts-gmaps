import { CustomMap } from "./CustomMap";
import { Company } from "./Company";
import { User } from "./User";

const user: User = new User();
const company: Company = new Company();

const customMap = new CustomMap("map");
customMap.addMarker(user);
customMap.addMarker(company);
