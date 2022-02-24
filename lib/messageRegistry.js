import { Registry } from "@cosmjs/proto-signing";

import { MsgCreateVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/tx";
import {
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
} from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgVote } from "cosmjs-types/cosmos/gov/v1beta1/tx";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";

const registry = new Registry();

// Banking
registry.register("/cosmos.bank.v1beta1.MsgSend", MsgSend);

// Send
registry.register("/cosmos.gov.v1beta1.MsgVote", MsgVote);

// Vesting
registry.register("/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount);

// Staking
registry.register("/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate);
registry.register("/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate);
registry.register("/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate);
registry.register(
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  MsgWithdrawDelegatorReward,
);

export default registry;
