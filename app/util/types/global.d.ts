import { ethers } from "ethers";
import { EventEmitter } from "stream";

//TODO: CHANGE PROVIDER
interface TEthereumProvider extends ethers.providers.ExternalProvider {}

declare global {
  interface Window {
    ethereum: TEthereumProvider | undefined;
  }
}
