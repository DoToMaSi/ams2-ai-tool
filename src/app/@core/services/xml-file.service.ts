
import { Injectable } from "@angular/core";
import { DriverProfile } from "@core/classes/driver-profile.class";
import { VARIABLE_ALIASES } from '@core/constants/variable-aliases.const';

@Injectable({
  providedIn: 'root'
})

export class XmlFileService {
  public async generateAiFile(drivers: DriverProfile[]) {
    try {
      let xmlString = `<?xml version="1.0" encoding="UTF-8"?>\n`;
      xmlString += `<custom_ai_drivers>\n`
        drivers.forEach((driver, idx) => {
          if (idx > 0) {
            xmlString += `\t\n`;
          }
          xmlString += `\t<driver livery_name="${driver.liveryName}">\n`;
          Object.entries(driver).forEach((objEntry: [string, any]) => {
            const variable = VARIABLE_ALIASES[objEntry[0] as keyof typeof VARIABLE_ALIASES];
            if (variable) {
              let entry = objEntry[1];

              if (typeof entry === 'number') {
                entry = (entry / 100);
              }

              xmlString += `\t\t<${variable}>${entry}</${variable}>\n`;
            }
          });
          xmlString += `\t</driver>\n`;
        })
      xmlString += `</custom_ai_drivers>`;
      // const xmlFile = this.parser.parseFromString(xmlString, 'text/xml');
      // return xmlFile;
      return xmlString;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  }
}
