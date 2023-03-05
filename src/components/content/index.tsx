import { h } from "preact";
import "ojs/ojlabel";
import "ojs/ojselectsingle";
import { ojSelectSingle } from "ojs/ojselectsingle";
import MutableArrayDataProvider = require("ojs/ojmutablearraydataprovider");

type ChartType = {
  id: number;
  value: string;
  label: string;
};

const chartTypeData = [
  { value: "bar", label: "Bar" },
  { value: "pie", label: "Pie" }
];

const chartTypesDP: MutableArrayDataProvider<ChartType["value"], ChartType>
    = new MutableArrayDataProvider(chartTypeData, { keyAttributes: "value" });

export function Content() {
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <h1>Product Information</h1>
      <div id="itemDetailsContainer">
        <oj-label for="basicSelect">Select Chart:</oj-label>
        <oj-select-single id="basicSelect" value="pie" class="selectSingleStyle" data={chartTypesDP}></oj-select-single>
      </div>
    </div>
  );
}
