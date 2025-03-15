let currentAvatarKey = "tone";

const avatarMenu = document.querySelector("#avatar-menu");
const avatarSelectors = document.querySelectorAll(".avatar-selector");
const avatarMenuItems = avatarMenu.querySelectorAll(".avatar-menu-item");

avatarMenu.addEventListener("click", handleAvatarMenuClick);

function updateAvatarMenu(avatarKey) {
  for (const avatarSelector of avatarSelectors) {
    avatarSelector.classList.toggle(
      "active",
      avatarSelector.dataset.avatarKey == avatarKey
    );
  }

  for (const avatarMenuItem of avatarMenuItems) {
    avatarMenuItem.classList.toggle(
      "active",
      avatarMenuItem.dataset.avatarKey === avatarKey
    );
  }
}

function handleAvatarMenuClick(e) {
  const nextAvatarKey = e.target.dataset.avatarKey;
  if (!nextAvatarKey) return;
  currentAvatarKey = nextAvatarKey;
  updateAvatarMenu(currentAvatarKey);
}
