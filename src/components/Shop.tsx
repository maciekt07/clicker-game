import React from "react";
import { items } from "../constants/items";
import { User } from "../types";
import {
  BuyButton,
  Container,
  Header,
  ItemWrapper,
  LockedContainer,
} from "../styles";
interface Props {
  userProfile: User;
  setUserProfile: React.Dispatch<React.SetStateAction<User>>;
}

export const Shop = ({ userProfile, setUserProfile }: Props) => {
  const handleBuyItem = (item: string) => {
    const selectedItem = items[item];
    const newPoints = userProfile.points - selectedItem.cost;
    const newMultiplier = userProfile.multiplier + selectedItem.multiplier;
    const newPerSecond = userProfile.perSecond + selectedItem.perSecond;
    const newInventory = { ...userProfile.inventory };
    newInventory[item] = (newInventory[item] || 0) + 1;
    setUserProfile({
      ...userProfile,
      points: newPoints,
      multiplier: newMultiplier,
      perSecond: newPerSecond,
      inventory: newInventory,
    });
  };

  return (
    <div>
      <Container>
        {/* TODO: Render LockedContainer only once if there are any locked achievements */}
        {Object.entries(items).map(([itemName, item]) => {
          if (item.cost > userProfile.maxPoints) {
            return (
              <LockedContainer key={itemName}>
                <h3>🔒 Locked</h3>
              </LockedContainer>
            );
          }

          return (
            <ItemWrapper key={itemName}>
              <Header>🐝{item.name}</Header>
              <p>Cost: {item.cost}</p>
              <p>Multiplier: {item.multiplier}</p>
              <p>Per second: {item.perSecond}</p>
              <p>You bought: {userProfile.inventory[itemName] | 0}</p>
              <BuyButton
                disabled={item.cost > userProfile.points}
                onClick={() => {
                  handleBuyItem(itemName);
                }}
              >
                {item.cost > userProfile.points ? "Not Enough Points" : "Buy"}
              </BuyButton>
            </ItemWrapper>
          );
        })}
      </Container>
    </div>
  );
};
