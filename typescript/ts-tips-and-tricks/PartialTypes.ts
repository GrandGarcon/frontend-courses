import {bytes32} from "soltypes";

type ethereumTxn = {
addressFrom : string;
transactionHash: bytes32;
}


// here the description of the nullTypeTransaction will be 
/**
 * addressFrom ?:
 * transactionHash ?: 
 * 
 * 
 */

type nullTypeTransaction  = Partial<ethereumTxn>;


// and then reverse of the above given type to the orignal one is through Required.

type orignalTransaction = Required<ethereumTxn>;





