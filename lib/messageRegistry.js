import { Registry } from "@cosmjs/proto-signing";

import { MsgCreateVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/tx";
//import { MsgDelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";
//import { MsgDeposit } from "cosmjs-types/cosmos/gov/v1beta1/tx";
//import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
//import { MsgVote } from "cosmjs-types/cosmos/gov/v1beta1/tx";
//import {
//  MsgWithdrawDelegatorReward,
//  MsgSetWithdrawAddress,
//} from "cosmjs-types/cosmos/distribution/v1beta1/tx";

//registry.register("/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate);
//registry.register("/cosmos.gov.v1beta1.MsgVote", MsgVote);
//registry.register("/cosmos.bank.v1beta1.MsgSend", MsgSend);
//registry.register("/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit);
//registry.register(
//  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
//  MsgWithdrawDelegatorReward,
//);
//registry.register("/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress);

const registry = new Registry();

registry.register("/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount);

export default registry;
