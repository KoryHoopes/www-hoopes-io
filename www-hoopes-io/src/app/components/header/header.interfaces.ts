import { IconDefinition } from "@fortawesome/fontawesome-common-types";

namespace HeaderInterfaces {
  export interface Site {
    title: string;
    email: any;
    baseUrl: string;
    mobileMenu: {
      icon: IconDefinition;
      show: boolean;
    };
  }

  export interface SocialMedia {
    name: string;
    icon: IconDefinition;
    url: string;
  }
}

export { HeaderInterfaces }