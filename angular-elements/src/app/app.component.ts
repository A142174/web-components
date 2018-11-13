import { Component, ViewEncapsulation, Input } from "@angular/core";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import {
  fetchAddressSuggestions,
  fetchSelectedAddress,
  storeSessionStorage,
  isValidSelectedAddress
} from "./app.service";
import { SELECTED_ADDRESS_KEY } from "./app.config";

@Component({
  selector: "ng-address-search",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  // component props
  @Input() redirect: string;
  @Input() minInputChars: number = 7;
  @Input() debounceTimeout: number = 500;

  // component state
  public suggestions: any = [];
  public searchboxValue: string = "";
  public isSearching: boolean = false;
  public activeSuggestion: number = -1;
  public showSuggestions: boolean = false;
  public isAddressSelected: boolean = false;

  public fetchAddressDebounced = AwesomeDebouncePromise(async searchTerm => {
    this.isSearching = true;
    return fetchAddressSuggestions(searchTerm);
  }, this.debounceTimeout);

  public async handleChange(ev) {
    this.searchboxValue = ev;

    if (this.searchboxValue.length < this.minInputChars) {
      this.showSuggestions = false;
      return;
    }
    try {
      this.suggestions = await this.fetchAddressDebounced(this.searchboxValue);
      this.showSuggestions = true;
    } catch (err) {
      // handle err
      this.suggestions = [];
      this.showSuggestions = false;
    } finally {
      this.isSearching = false;
    }
  }

  public async handleClickSuggestion(suggestion) {
    this.searchboxValue = suggestion.PartialAddress;
    this.showSuggestions = false;
    this.isAddressSelected = false;

    try {
      this.isSearching = true;
      const addressDetails = await fetchSelectedAddress(
        suggestion.Moniker,
        suggestion.PartialAddress
      );

      if (isValidSelectedAddress(addressDetails)) {
        const model = {
          details: addressDetails.SearchResponse,
          address: suggestion.PartialAddress
        };
        storeSessionStorage(SELECTED_ADDRESS_KEY, model);

        this.isAddressSelected = true;
      } else {
        // handle error message
      }
    } catch (err) {
      // handle err
    } finally {
      this.isSearching = false;
    }
  }

  public handleSearchClick() {
    // store address into in Session Storage
    if (this.isAddressSelected) {
      window.location.href = this.redirect;
    }
  }

  public handleAddressNotFound() {
    window.location.href = `${this.redirect}/#/v2/manual-address`;
  }
}
