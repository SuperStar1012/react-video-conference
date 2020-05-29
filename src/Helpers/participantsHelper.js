import { VERTICAL_NAV_OPTIONS } from "../Contexts/VerticalNavBarContext";

export const isParticipantMainStage = (participantSession) => {
  return (
    participantSession &&
    participantSession.currentLocation === VERTICAL_NAV_OPTIONS.mainStage
  );
};

export const isParticipantLobby = (participantSession) => {
  return (
    participantSession &&
    participantSession.currentLocation === VERTICAL_NAV_OPTIONS.lobby
  );
};

export const isParticipantAvailableForCall = (participantSession) => {
  return (
    participantSession &&
    participantSession.availableForCall &&
    !participantSession.groupId &&
    participantSession.currentLocation !== VERTICAL_NAV_OPTIONS.mainStage
  );
};

export const participantCanNetwork = (participantSession) => {
  return (
    participantSession &&
    !participantSession.groupId &&
    participantSession.currentLocation !== VERTICAL_NAV_OPTIONS.mainStage
  );
};

export const isParticipantOnCall = (participantSession) => {
  return (
    participantSession &&
    (participantSession.groupId ||
      participantSession.currentLocation === VERTICAL_NAV_OPTIONS.mainStage)
  );
};

export const participantHasSubtitle = (participant) =>
  participant.company &&
  (participant.company.trim() !== "" || participant.companyTitle.trim() !== "");

export const participantHasSocials = (participant) => {
  const { twitterUrl, linkedinUrl } = participant;
  return (
    (twitterUrl && twitterUrl.trim() !== "") ||
    (linkedinUrl && linkedinUrl.trim() !== "")
  );
};

export const participantHasFlag = (participant) =>
  participant.locationDetails !== null;
