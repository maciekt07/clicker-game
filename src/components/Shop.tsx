import { useMemo } from "react";
import { UserProfileProps } from "../types/userProfileProps";
import {
  BuyButton,
  Container,
  Cost,
  Description,
  Header,
  ItemName,
  ItemWrapper,
  LockedContainer,
} from "../styles";
import { achievements, items } from "../constants";
import BuySound from "../assets/sounds/buy.mp3";
import { formatNumber, playSound, showToast } from "../utils";
import { Tooltip } from "@mui/material";

// The new cost of the item is calculated using the formula:
// newCost = costBase * (rateGrowth ^ itemCount)
// where costBase is the initial cost of the item,
// rateGrowth is the factor by which the cost increases with each purchase (e.g. 1.1 for 10% increase),
// and itemCount is the current number of items owned by the user.

export const Shop = ({ userProfile, setUserProfile }: UserProfileProps) => {
  const rateGrown = 1.213742069;
  const descriptionMaxLength = 169;
  const handleBuyItem = (item: string) => {
    playSound(BuySound, userProfile.audioVolume);
    const selectedItem = items[item];

    const itemCount = userProfile.inventory[item] || 0;
    const newCost = Math.floor(
      selectedItem.cost * Math.pow(rateGrown, itemCount)
    );
    const newPoints = userProfile.points - newCost;
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
    const purchasedItemsSum = Object.values(userProfile.inventory).reduce(
      (a, b) => a + b,
      1
    );
    if (!userProfile.inventory[item]) {
      showToast({
        header: "New item unlocked!",
        text: `${selectedItem.name} ${selectedItem.emoji}`,
        emoji: "🔓",
        volume: userProfile.audioVolume,
      });
    }
    const unlockedPurchaseAchievements = Object.values(achievements).filter(
      (achievement) =>
        achievement.purchasesRequired !== undefined &&
        purchasedItemsSum >= achievement.purchasesRequired &&
        !userProfile.achievements.includes(achievement.name)
    );
    if (unlockedPurchaseAchievements.length > 0) {
      // Show toast notification for each unlocked purchase achievement
      unlockedPurchaseAchievements.forEach((achievement) => {
        showToast({
          header: `${achievement.name} unlocked!`,
          text: achievement.description,
          emoji: achievement.emoji,
          volume: userProfile.audioVolume,
        });
      });

      const newAchievements = userProfile.newAchievements + 1;
      // Add unlocked purchase achievements to user profile
      setUserProfile({
        ...userProfile,
        points: newPoints,
        multiplier: newMultiplier,
        perSecond: newPerSecond,
        inventory: newInventory,
        achievements: [
          ...userProfile.achievements,
          ...unlockedPurchaseAchievements.map(
            (achievement) => achievement.name
          ),
        ],
        newAchievements: newAchievements,
        dateAchievements: {
          ...userProfile.dateAchievements,
          [unlockedPurchaseAchievements[0].name]: new Date(),
        },
      });
    }
  };

  const numLockedItems = useMemo(() => {
    return Object.values(items).filter(
      (item) => item.cost > userProfile.maxPoints
    ).length;
  }, [userProfile.maxPoints]);

  return (
    <div>
      <Header>🛒 Shop</Header>

      <Container>
        {Object.entries(items).map(([itemName, item]) => {
          if (item.cost > userProfile.maxPoints) {
            return null;
          }

          const itemCount = userProfile.inventory[itemName] || 0;
          const newCost = Math.floor(
            item.cost * Math.pow(rateGrown, itemCount)
          );

          return (
            <ItemWrapper key={itemName}>
              <ItemName>
                {item.emoji} {item.name}
              </ItemName>
              {/* tooltip with the rest of the text when it is too long */}
              <Tooltip
                title={
                  item.description.length > descriptionMaxLength
                    ? `${item.description.substring(descriptionMaxLength)}`
                    : null
                }
              >
                <Description>
                  ”
                  {item.description.length > descriptionMaxLength
                    ? `${item.description.substring(
                        0,
                        descriptionMaxLength
                      )}...`
                    : item.description}
                  ”
                </Description>
              </Tooltip>
              <Cost enoughtPoints={userProfile.points >= newCost}>
                Cost: 🍯{formatNumber(newCost, 0)}
              </Cost>
              <p>Multiplier: {formatNumber(item.multiplier, 0)}</p>
              <p>Per second: {formatNumber(item.perSecond, 1)}</p>
              <p>You bought: {formatNumber(itemCount, 0)}</p>

              <BuyButton
                disabled={newCost > userProfile.points}
                onClick={() => {
                  handleBuyItem(itemName);
                }}
              >
                {newCost > userProfile.points ? "Not Enough Points" : "Buy"}
              </BuyButton>
            </ItemWrapper>
          );
        })}
        {numLockedItems > 0 && (
          <LockedContainer>
            <h3>🔒 Locked ({numLockedItems} Items)</h3>
          </LockedContainer>
        )}
      </Container>

      <div style={{ paddingTop: "85px" }} />
    </div>
  );
};
