import ConstCode from "~/src/common/constants/ConstCode";
import Service from "~/src/services/common/Service";

import UserSign from "~/src/services/UserSign";
export default ({ store, $axios }, inject) => {
  const ServiceObject = new Service($axios, store, ConstCode)
  inject('$UserSignSvc', new UserSign(ServiceObject));

}
