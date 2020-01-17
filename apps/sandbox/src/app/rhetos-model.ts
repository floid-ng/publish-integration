/* tslint:disable:no-empty-interface class-name */
export module Common {
  export const AuditingReportBaseKey = 'Common/AuditingReportBase';
  export interface AuditingReportBase {
    ID?: string;
    Created?: Date;
    User?: string;
    ItemId?: string;
    Action?: string;
    Table?: string;
    Property?: string;
    OldValue?: string;
    NewValue?: string;
  }

  export const AuditingReportKey = 'Common/AuditingReport';
  export interface AuditingReport {
    ID?: string;
    Created?: Date;
    User?: string;
    ItemId?: string;
    Action?: string;
    Table?: string;
    Property?: string;
    OldValue?: string;
    NewValue?: string;
  }

  export const LogReaderWithRelatedDataKey = 'Common/LogReaderWithRelatedData';
  export interface LogReaderWithRelatedData {
    ID?: string;
    MasterLogItemId?: string;
    MasterLogTableName?: string;
    Created?: Date;
    UserName?: string;
    ContextInfo?: string;
    Action?: string;
    TableName?: string;
    ItemID?: string;
    Description?: string;
  }

  export const MaterializeQueryTresholdKey = 'Common/MaterializeQueryTreshold';
  export interface MaterializeQueryTreshold {
    ID?: string;
    QueryKey: string;
    UserName?: string;
    Treshold?: number;
  }

  export const ClearMaterializeTresholdCacheKey =
    'Common/ClearMaterializeTresholdCache';
  export interface ClearMaterializeTresholdCache {}

  export const SettingsKey = 'Common/Settings';
  export interface Settings {
    ID?: string;
    Naziv?: string;
    Vrijednost?: string;
    TipVrijednosti?: string;
    Opis?: string;
  }

  export const AllClaimsKey = 'Common/AllClaims';
  export interface AllClaims {
    ID?: string;
    ClaimResource?: string;
    ClaimRight?: string;
    Applies?: boolean;
  }

  export const EditablePropertyClaimKey = 'Common/EditablePropertyClaim';
  export interface EditablePropertyClaim {
    ID?: string;
    ClaimResource?: string;
  }

  export const GetOsnovniSubjektAuditingLogKey =
    'Common/GetOsnovniSubjektAuditingLog';
  export interface GetOsnovniSubjektAuditingLog {
    ID?: string;
    AdditionalBoolPropertiesToFormatReverse?: string;
    AdditionalCustomPropertyNamesJsonDictionary?: string;
  }

  export const GetPismenoAuditingLogKey = 'Common/GetPismenoAuditingLog';
  export interface GetPismenoAuditingLog {
    ID?: string;
    AdditionalIgnorePropertiesOnAnyAction?: string;
  }

  export const GetPredmetAuditingLogKey = 'Common/GetPredmetAuditingLog';
  export interface GetPredmetAuditingLog {
    ID?: string;
    AdditionalIgnorePropertiesOnAnyAction?: string;
    AdditionalIgnoreRowsForTablesWithEmptyValues?: string;
    AdditionalCustomTableActionTextJsonDictionary?: string;
  }

  export const GridConfigurationKey = 'Common/GridConfiguration';
  export interface GridConfiguration {
    ID?: string;
    GridIdentificator: string;
    GridConfigurationInJSONFormat: string;
    CreatedAt?: Date;
    ModifiedAt?: Date;
    IsDefault?: boolean;
    PrincipalID?: string;
  }

  export const MyConfigurationKey = 'Common/MyConfiguration';
  export interface MyConfiguration {
    GridIdentificator?: string;
  }

  export const DefaultConfigurationKey = 'Common/DefaultConfiguration';
  export interface DefaultConfiguration {
    GridIdentificator?: string;
  }

  export const SubmitGridConfigurationKey = 'Common/SubmitGridConfiguration';
  export interface SubmitGridConfiguration {
    GridIdentificator: string;
    GridConfigurationInJSONFormat: string;
    IsDefault: boolean;
  }

  export const AutoCodeCacheKey = 'Common/AutoCodeCache';
  export interface AutoCodeCache {
    ID?: string;
    Entity?: string;
    Property?: string;
    Grouping?: string;
    Prefix?: string;
    MinDigits?: number;
    LastCode?: number;
  }

  export const FilterIdKey = 'Common/FilterId';
  export interface FilterId {
    ID?: string;
    Handle?: string;
    Value?: string;
  }

  export const KeepSynchronizedMetadataKey = 'Common/KeepSynchronizedMetadata';
  export interface KeepSynchronizedMetadata {
    ID?: string;
    Target?: string;
    Source?: string;
    Context?: string;
  }

  export const ExclusiveLockKey = 'Common/ExclusiveLock';
  export interface ExclusiveLock {
    ID?: string;
    ResourceType: string;
    ResourceID: string;
    UserName: string;
    Workstation: string;
    LockStart: Date;
    LockFinish: Date;
  }

  export const SetLockKey = 'Common/SetLock';
  export interface SetLock {
    ResourceType?: string;
    ResourceID?: string;
  }

  export const ReleaseLockKey = 'Common/ReleaseLock';
  export interface ReleaseLock {
    ResourceType?: string;
    ResourceID?: string;
  }

  export const LogReaderKey = 'Common/LogReader';
  export interface LogReader {
    ID?: string;
    Created: Date;
    UserName: string;
    Workstation: string;
    ContextInfo?: string;
    Action: string;
    TableName?: string;
    ItemId?: string;
    Description?: string;
  }

  export const LogRelatedItemReaderKey = 'Common/LogRelatedItemReader';
  export interface LogRelatedItemReader {
    ID?: string;
    TableName?: string;
    Relation?: string;
    ItemId?: string;
    LogID: string;
  }

  export const LogKey = 'Common/Log';
  export interface Log {
    ID?: string;
    Created: Date;
    UserName: string;
    Workstation: string;
    ContextInfo?: string;
    Action: string;
    TableName?: string;
    ItemId?: string;
    Description?: string;
  }

  export const AddToLogKey = 'Common/AddToLog';
  export interface AddToLog {
    Action?: string;
    TableName?: string;
    ItemId?: string;
    Description?: string;
  }

  export const LogRelatedItemKey = 'Common/LogRelatedItem';
  export interface LogRelatedItem {
    ID?: string;
    LogID: string;
    TableName?: string;
    ItemId?: string;
    Relation?: string;
  }

  export const RelatedEventsSourceKey = 'Common/RelatedEventsSource';
  export interface RelatedEventsSource {
    ID?: string;
    LogID?: string;
    Relation?: string;
    RelatedToTable?: string;
    RelatedToItem?: string;
    Created: Date;
    UserName: string;
    Workstation: string;
    ContextInfo?: string;
    Action: string;
    TableName?: string;
    ItemId?: string;
    Description?: string;
  }

  export const ClaimKey = 'Common/Claim';
  export interface Claim {
    ID?: string;
    ClaimResource: string;
    ClaimRight: string;
    Active?: boolean;
  }

  export const MyClaimKey = 'Common/MyClaim';
  export interface MyClaim {
    ID?: string;
    Applies?: boolean;
  }

  export const PrincipalKey = 'Common/Principal';
  export interface Principal {
    ID?: string;
    Name: string;
    ZupItUsername?: string;
  }

  export const PrincipalHasRoleKey = 'Common/PrincipalHasRole';
  export interface PrincipalHasRole {
    ID?: string;
    PrincipalID: string;
    RoleID: string;
  }

  export const RoleKey = 'Common/Role';
  export interface Role {
    ID?: string;
    Name: string;
    RoleGroup: boolean;
    SystemUserBasicRole: boolean;
    AdministratorOmega: boolean;
  }

  export const RoleInheritsRoleKey = 'Common/RoleInheritsRole';
  export interface RoleInheritsRole {
    ID?: string;
    UsersFromID: string;
    PermissionsFromID: string;
  }

  export const PrincipalPermissionKey = 'Common/PrincipalPermission';
  export interface PrincipalPermission {
    ID?: string;
    PrincipalID: string;
    ClaimID: string;
    IsAuthorized: boolean;
  }

  export const RolePermissionKey = 'Common/RolePermission';
  export interface RolePermission {
    ID?: string;
    RoleID: string;
    ClaimID: string;
    IsAuthorized: boolean;
  }

  export const RowPermissionsReadItemsKey = 'Common/RowPermissionsReadItems';
  export interface RowPermissionsReadItems {}

  export const RowPermissionsWriteItemsKey = 'Common/RowPermissionsWriteItems';
  export interface RowPermissionsWriteItems {}

  export const StructureMetadataKey = 'Common/StructureMetadata';
  export interface StructureMetadata {
    Value?: string;
  }

  export const GetStructureMetadataKey = 'Common/GetStructureMetadata';
  export interface GetStructureMetadata {
    Key?: string;
  }

  export const ImpersonateKey = 'Common/Impersonate';
  export interface Impersonate {
    UserName?: string;
  }

  export const StopImpersonatingKey = 'Common/StopImpersonating';
  export interface StopImpersonating {}

  export const LoggedItemKey = 'Common/LoggedItem';
  export interface LoggedItem {
    TableName?: string;
    ItemId?: string;
  }

  export const DeletedItemsKey = 'Common/DeletedItems';
  export interface DeletedItems {
    TableName?: string;
  }

  export const LogEntryKey = 'Common/LogEntry';
  export interface LogEntry {
    LogID?: string;
  }

  export const AuditRelatedEventsKey = 'Common/AuditRelatedEvents';
  export interface AuditRelatedEvents {
    ID?: string;
    LogID?: string;
    Created?: Date;
    Action?: string;
    TableName?: string;
    ItemId?: string;
    Description?: string;
    ClientUserName?: string;
    ClientWorkstation?: string;
    Relation?: string;
    Summary?: string;
  }

  export const AuditDataModificationsKey = 'Common/AuditDataModifications';
  export interface AuditDataModifications {
    ID?: string;
    LogID?: string;
    Property?: string;
    OldValue?: string;
    NewValue?: string;
    Modified?: boolean;
  }

  export const ReportTemplateKey = 'Common/ReportTemplate';
  export interface ReportTemplate {
    ID?: string;
    FileName: string;
    DisplayName: string;
  }

  export const PrincipalBrowseKey = 'Common/PrincipalBrowse';
  export interface PrincipalBrowse {
    ID?: string;
    ZupItUsername?: string;
    Name?: string;
    KorisnikSustava?: boolean;
    IsNotEmployee?: boolean;
  }

  export const PrincipalBrowseBaseKey = 'Common/PrincipalBrowseBase';
  export interface PrincipalBrowseBase {
    ID?: string;
    Name?: string;
    KorisnikSustava?: boolean;
    IsNotEmployee?: boolean;
  }

  export const PrincipalZaposlenikExtKey = 'Common/PrincipalZaposlenikExt';
  export interface PrincipalZaposlenikExt {
    ID?: string;
    ImePrezime?: string;
  }

  export const RoleGroupKey = 'Common/RoleGroup';
  export interface RoleGroup {
    ID?: string;
    Naziv?: string;
  }

  export const ToggleRoleClaimKey = 'Common/ToggleRoleClaim';
  export interface ToggleRoleClaim {
    RoleID?: string;
    ClaimID?: string;
    Allowed?: boolean;
  }

  export const ToggleRoleClaimGroupKey = 'Common/ToggleRoleClaimGroup';
  export interface ToggleRoleClaimGroup {
    RoleID?: string;
    ClaimGroupID?: string;
    Allowed?: boolean;
  }

  export const ToggleAllRoleClaimsKey = 'Common/ToggleAllRoleClaims';
  export interface ToggleAllRoleClaims {
    RoleID?: string;
    Allowed?: boolean;
  }

  export const ToggleRoleSelectedClaimsKey = 'Common/ToggleRoleSelectedClaims';
  export interface ToggleRoleSelectedClaims {
    RoleID?: string;
    ClaimGroupIDs?: string;
    Allowed?: boolean;
  }

  export const RoleBrowseViewKey = 'Common/RoleBrowseView';
  export interface RoleBrowseView {
    ID?: string;
    Naziv?: string;
    OsnovnaRolaKorisnikaSustava?: boolean;
  }

  export const RoleGroupClaimsKey = 'Common/RoleGroupClaims';
  export interface RoleGroupClaims {
    ID?: string;
    RoleID?: string;
    ClaimResource?: string;
    HasAllRights?: boolean;
    HasSomeRights?: boolean;
  }

  export const RoleGroupAllClaimsKey = 'Common/RoleGroupAllClaims';
  export interface RoleGroupAllClaims {
    ID?: string;
    RoleID?: string;
    ClaimRight?: string;
    ClaimGroupID?: string;
    HasRight?: boolean;
  }

  export const RoleGroupRoleKey = 'Common/RoleGroupRole';
  export interface RoleGroupRole {
    ID?: string;
    RoleID?: string;
    RoleGroupID?: string;
    Naziv?: string;
    HasGroup?: boolean;
  }

  export const ToggleRoleRoleGroupKey = 'Common/ToggleRoleRoleGroup';
  export interface ToggleRoleRoleGroup {
    RoleID?: string;
    RoleGroupID?: string;
    Allowed?: boolean;
  }

  export const ToggleRoleSelectedRoleGroupsKey =
    'Common/ToggleRoleSelectedRoleGroups';
  export interface ToggleRoleSelectedRoleGroups {
    RoleID?: string;
    RoleGroupIDs?: string;
    Allowed?: boolean;
  }

  export const PrincipalHasRoleViewKey = 'Common/PrincipalHasRoleView';
  export interface PrincipalHasRoleView {
    ID?: string;
    ZaposlenikID?: string;
    RoleID?: string;
    PrincipalID?: string;
    RoleName?: string;
    HasRole?: boolean;
  }

  export const HideRoleKorisnikSustavaKey = 'Common/HideRoleKorisnikSustava';
  export interface HideRoleKorisnikSustava {}

  export const HideRoleOmegaAdministratorKey =
    'Common/HideRoleOmegaAdministrator';
  export interface HideRoleOmegaAdministrator {}

  export const ZaposlenikPrincipalViewKey = 'Common/ZaposlenikPrincipalView';
  export interface ZaposlenikPrincipalView {
    ID?: string;
    PrincipalID?: string;
    PrincipalName?: string;
  }

  export const AddRemovePrincipalRoleKey = 'Common/AddRemovePrincipalRole';
  export interface AddRemovePrincipalRole {
    RoleID?: string;
    PrincipalID?: string;
    HasRole?: boolean;
  }

  export const SmartSearchKey = 'Common/SmartSearch';
  export interface SmartSearch {
    Pattern?: string;
  }

  export const OlderThanHistoryEntriesKey = 'Common/OlderThanHistoryEntries';
  export interface OlderThanHistoryEntries {}

  export const NewerThanCurrentEntryKey = 'Common/NewerThanCurrentEntry';
  export interface NewerThanCurrentEntry {}

  export const RoleGroupRoleCheckKey = 'Common/RoleGroupRoleCheck';
  export interface RoleGroupRoleCheck {}

  export const ZupItUsernameUniqueKey = 'Common/ZupItUsernameUnique';
  export interface ZupItUsernameUnique {}

  export const SystemRequiredActiveKey = 'Common/SystemRequiredActive';
  export interface SystemRequiredActive {}

  export const SystemRequiredLogKey = 'Common/SystemRequiredLog';
  export interface SystemRequiredLog {}

  export const SystemRequiredPrincipalKey = 'Common/SystemRequiredPrincipal';
  export interface SystemRequiredPrincipal {}

  export const SystemRequiredUsersFromKey = 'Common/SystemRequiredUsersFrom';
  export interface SystemRequiredUsersFrom {}

  export const SystemRequiredClaimKey = 'Common/SystemRequiredClaim';
  export interface SystemRequiredClaim {}

  export const SystemRequiredRoleKey = 'Common/SystemRequiredRole';
  export interface SystemRequiredRole {}
}

export module Adresar {
  export const BrojcanaOznakaStvarateljaPismenaKey =
    'Adresar/BrojcanaOznakaStvarateljaPismena';
  export interface BrojcanaOznakaStvarateljaPismena {
    ID?: string;
    BrojcanaOznaka: string;
    Naziv: string;
    Active?: boolean;
  }

  export const BrojcanaOznakaStvarateljaPismenaLookupKey =
    'Adresar/BrojcanaOznakaStvarateljaPismenaLookup';
  export interface BrojcanaOznakaStvarateljaPismenaLookup {
    ID?: string;
    Active?: boolean;
    BrojcanaOznaka?: string;
    Naziv?: string;
  }

  export const BrojcanaOznakaStvarateljaPismenaQuickSearchKey =
    'Adresar/BrojcanaOznakaStvarateljaPismenaQuickSearch';
  export interface BrojcanaOznakaStvarateljaPismenaQuickSearch {
    Pattern?: string;
  }

  export const MjestoKey = 'Adresar/Mjesto';
  export interface Mjesto {
    ID?: string;
    Naziv: string;
    ZupanijaID?: string;
    DrzavaID: string;
    Active?: boolean;
  }

  export const MjestoBrowseKey = 'Adresar/MjestoBrowse';
  export interface MjestoBrowse {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
    ZupanijaNaziv?: string;
    DrzavaKratkiNaziv?: string;
    DrzavaDvoslovnaOznaka?: string;
    DrzavaTroslovnaOznaka?: string;
    DrzavaBrojcanaOznaka?: string;
  }

  export const MjestoLookupKey = 'Adresar/MjestoLookup';
  export interface MjestoLookup {
    ID?: string;
    Active?: boolean;
    Naziv?: string;
    ZupanijaNaziv?: string;
    ZupanijaID?: string;
    DrzavaKratkiNaziv?: string;
    DrzavaSluzbeniNaziv?: string;
    DrzavaDvoslovnaOznaka?: string;
    DrzavaTroslovnaOznaka?: string;
    DrzavaBrojcanaOznaka?: string;
    DrzavaKratkiNazivNaEngleskom?: string;
    DrzavaID?: string;
  }

  export const MjestoQuickSearchKey = 'Adresar/MjestoQuickSearch';
  export interface MjestoQuickSearch {
    Pattern?: string;
    DrzavaID?: string;
  }

  export const ZupanijaKey = 'Adresar/Zupanija';
  export interface Zupanija {
    ID?: string;
    Naziv: string;
    Active?: boolean;
  }

  export const ZupanijaBrowseKey = 'Adresar/ZupanijaBrowse';
  export interface ZupanijaBrowse {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const DrzavaKey = 'Adresar/Drzava';
  export interface Drzava {
    ID?: string;
    KratkiNaziv: string;
    SluzbeniNaziv?: string;
    DvoslovnaOznaka: string;
    TroslovnaOznaka: string;
    BrojcanaOznaka: string;
    KratkiNazivNaEngleskom?: string;
    SluzbeniNazivNaEngleskom?: string;
    CtxId?: number;
    Active?: boolean;
  }

  export const DrzavaBrowseKey = 'Adresar/DrzavaBrowse';
  export interface DrzavaBrowse {
    ID?: string;
    KratkiNaziv?: string;
    SluzbeniNaziv?: string;
    DvoslovnaOznaka?: string;
    TroslovnaOznaka?: string;
    BrojcanaOznaka?: string;
    KratkiNazivNaEngleskom?: string;
    SluzbeniNazivNaEngleskom?: string;
    Active?: boolean;
  }

  export const DrzavaLookupKey = 'Adresar/DrzavaLookup';
  export interface DrzavaLookup {
    ID?: string;
    Active?: boolean;
    KratkiNaziv?: string;
    SluzbeniNaziv?: string;
    DvoslovnaOznaka?: string;
    TroslovnaOznaka?: string;
    BrojcanaOznaka?: string;
    KratkiNazivNaEngleskom?: string;
  }

  export const DrzavaQuickSearchKey = 'Adresar/DrzavaQuickSearch';
  export interface DrzavaQuickSearch {
    Pattern?: string;
  }

  export const DostavnaPostaKey = 'Adresar/DostavnaPosta';
  export interface DostavnaPosta {
    ID?: string;
    Naziv: string;
    PostanskiBroj: string;
    Active?: boolean;
  }

  export const DostavnaPostaDrzavaKey = 'Adresar/DostavnaPostaDrzava';
  export interface DostavnaPostaDrzava {
    ID?: string;
    DrzavaIDs?: string;
  }

  export const DostavnaPostaBrowseKey = 'Adresar/DostavnaPostaBrowse';
  export interface DostavnaPostaBrowse {
    ID?: string;
    Naziv?: string;
    PostanskiBroj?: string;
    Active?: boolean;
  }

  export const DostavnaPostaLookupKey = 'Adresar/DostavnaPostaLookup';
  export interface DostavnaPostaLookup {
    ID?: string;
    Active?: boolean;
    Naziv?: string;
    PostanskiBroj?: string;
    DrzavaIDs?: string;
  }

  export const DostavnaPostaQuickSearchKey = 'Adresar/DostavnaPostaQuickSearch';
  export interface DostavnaPostaQuickSearch {
    Pattern?: string;
    DrzavaID?: string;
  }

  export const NaseljeKey = 'Adresar/Naselje';
  export interface Naselje {
    ID?: string;
    Naziv: string;
    MjestoID: string;
    DostavnaPostaID: string;
    CtxId?: number;
    Active?: boolean;
  }

  export const NaseljeBrowseKey = 'Adresar/NaseljeBrowse';
  export interface NaseljeBrowse {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
    MjestoNaziv?: string;
    DostavnaPostaNaziv?: string;
    DostavnaPostaPostanskiBroj?: string;
  }

  export const NaseljeLookupKey = 'Adresar/NaseljeLookup';
  export interface NaseljeLookup {
    ID?: string;
    Active?: boolean;
    Naziv?: string;
    MjestoNaziv?: string;
    MjestoZupanijaNaziv?: string;
    MjestoDrzavaKratkiNaziv?: string;
    MjestoDrzavaSluzbeniNaziv?: string;
    MjestoDrzavaDvoslovnaOznaka?: string;
    MjestoDrzavaTroslovnaOznaka?: string;
    MjestoDrzavaBrojcanaOznaka?: string;
    MjestoDrzavaKratkiNazivNaEngleskom?: string;
    MjestoID?: string;
    PostanskiBroj?: string;
    DrzavaID?: string;
    NaseljePostanskiBroj?: string;
  }

  export const NaseljeQuickSearchKey = 'Adresar/NaseljeQuickSearch';
  export interface NaseljeQuickSearch {
    Pattern?: string;
  }

  export const QuickInsertNaseljeKey = 'Adresar/QuickInsertNaselje';
  export interface QuickInsertNaselje {
    NaseljeID: string;
    DrzavaID: string;
    NazivMjesta: string;
    PostanskiBroj: string;
    NazivNaselja?: string;
    NazivDostavnePoste?: string;
  }

  export const AdresaKey = 'Adresar/Adresa';
  export interface Adresa {
    ID?: string;
    DrzavaID: string;
    UlicaIKucniBroj?: string;
    MjestoID?: string;
    NaseljeID: string;
    IsDefault?: boolean;
    KontaktID?: string;
  }

  export const DefaultAdresaByKontaktIDKey = 'Adresar/DefaultAdresaByKontaktID';
  export interface DefaultAdresaByKontaktID {
    KontaktID?: string;
    Pattern?: string;
  }

  export const DefaultAdresaByKontaktIDsKey =
    'Adresar/DefaultAdresaByKontaktIDs';
  export interface DefaultAdresaByKontaktIDs {
    KontaktIDsListJson?: string;
  }

  export const AdresaBrowseKey = 'Adresar/AdresaBrowse';
  export interface AdresaBrowse {
    ID?: string;
    UlicaIKucniBroj?: string;
    IsDefault?: boolean;
    KontaktID?: string;
    DrzavaKratkiNaziv?: string;
    MjestoNaziv?: string;
    NaseljeNaziv?: string;
  }

  export const AdresaExtendedKey = 'Adresar/AdresaExtended';
  export interface AdresaExtended {
    ID?: string;
    UlicaIKucniBroj?: string;
    UlicaIKucniBrojMjestoDrzava?: string;
    MjestoNaziv?: string;
    DrzavaNaziv?: string;
  }

  export const OsnovniSubjektAktivacijaEventKey =
    'Adresar/OsnovniSubjektAktivacijaEvent';
  export interface OsnovniSubjektAktivacijaEvent {
    ID?: string;
    DatumKreiranja?: Date;
    OsnovniSubjektID: string;
    KorisnikID?: string;
  }

  export const OsnovniSubjektDeaktivacijaEventKey =
    'Adresar/OsnovniSubjektDeaktivacijaEvent';
  export interface OsnovniSubjektDeaktivacijaEvent {
    ID?: string;
    DatumKreiranja?: Date;
    OsnovniSubjektID: string;
    KorisnikID?: string;
  }

  export const OsnovniSubjektAktivnostLogKey =
    'Adresar/OsnovniSubjektAktivnostLog';
  export interface OsnovniSubjektAktivnostLog {
    ID?: string;
    Active?: boolean;
    DatumKreiranja?: Date;
    OsnovniSubjektID?: string;
  }

  export const OsnovniSubjektEventDataKey = 'Adresar/OsnovniSubjektEventData';
  export interface OsnovniSubjektEventData {
    ID?: string;
    Active?: boolean;
    TipSubjektaID?: string;
  }

  export const OsnovniSubjektEventDataPersistedKey =
    'Adresar/OsnovniSubjektEventDataPersisted';
  export interface OsnovniSubjektEventDataPersisted {
    ID?: string;
    Active?: boolean;
    TipSubjektaID?: string;
  }

  export const OsnovniSubjektKey = 'Adresar/OsnovniSubjekt';
  export interface OsnovniSubjekt {
    ID?: string;
    JePravnaOsoba?: boolean;
    BrojcanaOznakaStvarateljaID: string;
    OIB?: string;
    InozemniPorezniBroj?: string;
    NadredeniSubjektID?: string;
  }

  export const DuplicateOIBKey = 'Adresar/DuplicateOIB';
  export interface DuplicateOIB {}

  export const MoguciNadredeniSubjektiKey = 'Adresar/MoguciNadredeniSubjekti';
  export interface MoguciNadredeniSubjekti {
    ID?: string;
  }

  export const SamoAktivniSubjektiKey = 'Adresar/SamoAktivniSubjekti';
  export interface SamoAktivniSubjekti {}

  export const OsnovniSubjektQuickSearchKey =
    'Adresar/OsnovniSubjektQuickSearch';
  export interface OsnovniSubjektQuickSearch {
    Pattern?: string;
  }

  export const PravnaOsobaKey = 'Adresar/PravnaOsoba';
  export interface PravnaOsoba {
    ID?: string;
    Naziv: string;
    MB?: string;
    MBS?: string;
  }

  export const DuplicateMBKey = 'Adresar/DuplicateMB';
  export interface DuplicateMB {}

  export const DuplicateMBSKey = 'Adresar/DuplicateMBS';
  export interface DuplicateMBS {}

  export const UpsertPravnaOsobaKey = 'Adresar/UpsertPravnaOsoba';
  export interface UpsertPravnaOsoba {
    ID: string;
    BrojcanaOznakaStvarateljaID: string;
    OIB?: string;
    InozemniPorezniBroj?: string;
    NadredeniSubjektID?: string;
    Naziv: string;
    MB?: string;
    MBS?: string;
    IsNew?: boolean;
    DefaultnaAdresaJson?: string;
    TipSubjektaID?: string;
  }

  export const FizickaOsobaKey = 'Adresar/FizickaOsoba';
  export interface FizickaOsoba {
    ID?: string;
    Ime: string;
    Prezime: string;
    MBG?: string;
  }

  export const DuplicateMBGKey = 'Adresar/DuplicateMBG';
  export interface DuplicateMBG {}

  export const UpsertFizickaOsobaKey = 'Adresar/UpsertFizickaOsoba';
  export interface UpsertFizickaOsoba {
    ID: string;
    BrojcanaOznakaStvarateljaID: string;
    OIB?: string;
    InozemniPorezniBroj?: string;
    NadredeniSubjektID?: string;
    Ime: string;
    Prezime: string;
    MBG?: string;
    IsNew?: boolean;
    DefaultnaAdresaJson?: string;
    TipSubjektaID?: string;
  }

  export const OsnovniSubjektExtendedKey = 'Adresar/OsnovniSubjektExtended';
  export interface OsnovniSubjektExtended {
    ID?: string;
    NazivSubjekta?: string;
    NazivMjesto?: string;
    NazivNaselje?: string;
    MjestoINaziv?: string;
    DrzavaNaziv?: string;
    DrzavaFromAdresaNaziv?: string;
    JePravnaOsoba?: boolean;
    BrojcanaOznakaStvarateljaID?: string;
    OIB?: string;
    AdresaUlicaIKucniBroj?: string;
    TipSubjektaNaziv?: string;
    Active?: boolean;
    NadredeniSubjektID?: string;
    JeNadredjeni?: boolean;
    TipSubjektaID?: string;
  }

  export const OsnovniSubjektLookupKey = 'Adresar/OsnovniSubjektLookup';
  export interface OsnovniSubjektLookup {
    ID?: string;
    BrojcanaOznakaStvarateljaNaziv?: string;
    BrojcanaOznakaStvarateljaBrojcanaOznaka?: string;
    NazivSubjekta?: string;
    NazivMjesto?: string;
    AdresaUlicaIKucniBroj?: string;
    Active?: boolean;
    NadredeniSubjektID?: string;
    OIB?: string;
    ToRecompileID?: string;
  }

  export const ComputeFizickaOsobaInfoKey = 'Adresar/ComputeFizickaOsobaInfo';
  export interface ComputeFizickaOsobaInfo {
    ID?: string;
    ImePrezime?: string;
    PrezimeIme?: string;
  }

  export const FizickaOsobaInfoKey = 'Adresar/FizickaOsobaInfo';
  export interface FizickaOsobaInfo {
    ID?: string;
    ImePrezime?: string;
    PrezimeIme?: string;
  }

  export const OS_WithRecompileKey = 'Adresar/OS_WithRecompile';
  export interface OS_WithRecompile {
    ID?: string;
    aa?: boolean;
  }

  export const OsnovniSubjektPovezaniKey = 'Adresar/OsnovniSubjektPovezani';
  export interface OsnovniSubjektPovezani {
    ID?: string;
    OIB?: string;
    NazivSubjekta?: string;
    NadredeniSubjektID?: string;
    _WithRecompile?: boolean;
  }

  export const OsnovniSubjektPovezaniBrowseKey =
    'Adresar/OsnovniSubjektPovezaniBrowse';
  export interface OsnovniSubjektPovezaniBrowse {
    ID?: string;
    NazivSubjekta?: string;
    NadredeniSubjektID?: string;
    _WithRecompile?: boolean;
    OIB?: string;
  }

  export const PovezaniSubjektiKey = 'Adresar/PovezaniSubjekti';
  export interface PovezaniSubjekti {
    OsnovniSubjektID?: string;
  }

  export const OsnovniSubjektBrowseKey = 'Adresar/OsnovniSubjektBrowse';
  export interface OsnovniSubjektBrowse {
    ID?: string;
    AdresaUlicaIKucniBroj?: string;
    TipSubjektaNaziv?: string;
    TipSubjektaID?: string;
    NazivSubjekta?: string;
    NazivMjesto?: string;
    NazivNaselje?: string;
    MjestoINaziv?: string;
    DrzavaNaziv?: string;
    Active?: boolean;
    NekiID?: string;
    OIB?: string;
    JePravnaOsoba?: boolean;
    BrojcanaOznakaStvarateljaID?: string;
    BrojcanaOznakaStvarateljaBrojcanaOznaka?: string;
  }

  export const OsnovniSubjektBrowseIdsOnlyKey =
    'Adresar/OsnovniSubjektBrowseIdsOnly';
  export interface OsnovniSubjektBrowseIdsOnly {
    IDs?: string;
  }

  export const AdresaPrimateljaLookupKey = 'Adresar/AdresaPrimateljaLookup';
  export interface AdresaPrimateljaLookup {
    ID?: string;
    MjestoNaziv?: string;
    DrzavaNaziv?: string;
    NaseljeID?: string;
    UlicaIKucniBroj?: string;
    UlicaIKucniBrojMjestoDrzava?: string;
  }

  export const AdresaByKontaktIDAndPatternKey =
    'Adresar/AdresaByKontaktIDAndPattern';
  export interface AdresaByKontaktIDAndPattern {
    Pattern?: string;
    PrimateljID?: string;
  }

  export const AdresaLookupKey = 'Adresar/AdresaLookup';
  export interface AdresaLookup {
    ID?: string;
    KontaktExtension_OsnovniSubjektExtendedNazivSubjekta?: string;
    KontaktExtension_OsnovniSubjektExtendedNazivMjesto?: string;
  }

  export const AdresaByKontaktIDKey = 'Adresar/AdresaByKontaktID';
  export interface AdresaByKontaktID {
    Pattern?: string;
  }

  export const KontaktDetaljKey = 'Adresar/KontaktDetalj';
  export interface KontaktDetalj {
    ID?: string;
    KontaktID: string;
    Vrijednost: string;
    Oznaka?: string;
    IsDefault?: boolean;
    VrstaKontaktDetaljaID: string;
  }

  export const KontaktDetaljBrowseKey = 'Adresar/KontaktDetaljBrowse';
  export interface KontaktDetaljBrowse {
    ID?: string;
    Oznaka?: string;
    Vrijednost?: string;
    KontaktID?: string;
    IsDefault?: boolean;
    VrstaKontaktDetaljaNaziv?: string;
  }

  export const VrstaKontaktDetaljaKey = 'Adresar/VrstaKontaktDetalja';
  export interface VrstaKontaktDetalja {
    ID?: string;
    Naziv: string;
    ValidationRegularExpression?: string;
    ValidationErrorMessage?: string;
    MustBeDefault?: boolean;
  }

  export const VrstaKontaktDetaljaBrowseKey =
    'Adresar/VrstaKontaktDetaljaBrowse';
  export interface VrstaKontaktDetaljaBrowse {
    ID?: string;
    Naziv?: string;
    ValidationRegularExpression?: string;
    ValidationErrorMessage?: string;
    MustBeDefault?: boolean;
  }

  export const PromijeniVrstuSubjektaKey = 'Adresar/PromijeniVrstuSubjekta';
  export interface PromijeniVrstuSubjekta {
    SubjektId?: string;
  }

  export const OsnovniSubjektBrowseFilterKey =
    'Adresar/OsnovniSubjektBrowseFilter';
  export interface OsnovniSubjektBrowseFilter {
    Pattern?: string;
    NazivSubjekta?: string;
    DrzavaNaziv?: string;
    NazivMjesto?: string;
    NazivNaselje?: string;
    OIB?: string;
    JePravnaOsoba?: boolean;
    Active?: boolean;
    BrojcanaOznakaStvarateljaBrojcanaOznaka?: string;
    AdresaUlicaIKucniBroj?: string;
    TipSubjektaID?: string;
  }

  export const ComputeKontaktiFTSKljucneRijeciKey =
    'Adresar/ComputeKontaktiFTSKljucneRijeci';
  export interface ComputeKontaktiFTSKljucneRijeci {
    ID?: string;
    KljucneRijeci?: string;
    NazivSubjekta?: string;
    BrojcanaOznakaStvarateljaBrojcanaOznaka?: string;
    TipSubjektaNaziv?: string;
  }

  export const KontaktiFTSKey = 'Adresar/KontaktiFTS';
  export interface KontaktiFTS {
    ID?: string;
    TipSubjektaNaziv?: string;
    KljucneRijeci?: string;
    NazivSubjekta?: string;
    BrojcanaOznakaStvarateljaBrojcanaOznaka?: string;
    CTXSubjektID?: string;
  }

  export const SubjektaPromijeniTipKey = 'Adresar/SubjektaPromijeniTip';
  export interface SubjektaPromijeniTip {
    ID?: string;
    OsnovniSubjektID: string;
    DatumKreiranja?: Date;
    TipSubjektaID: string;
    KorisnikID?: string;
  }

  export const SubjektaPromijeniTipBrowseKey =
    'Adresar/SubjektaPromijeniTipBrowse';
  export interface SubjektaPromijeniTipBrowse {
    ID?: string;
    OsnovniSubjektID?: string;
    TipSubjektaID?: string;
    DatumKreiranja?: Date;
    Active?: boolean;
  }

  export const TipSubjektaKey = 'Adresar/TipSubjekta';
  export interface TipSubjekta {
    ID?: string;
    Naziv: string;
    JePravnaOsoba?: boolean;
    Active?: boolean;
  }

  export const TipSubjektaLookupKey = 'Adresar/TipSubjektaLookup';
  export interface TipSubjektaLookup {
    ID?: string;
    Active?: boolean;
    Naziv?: string;
    JePravnaOsoba?: boolean;
  }

  export const TipSubjektaExtendedKey = 'Adresar/TipSubjektaExtended';
  export interface TipSubjektaExtended {
    ID?: string;
    Naziv?: string;
    JePravnaOsoba?: boolean;
    Active?: boolean;
    IsPredefiniraniTip?: boolean;
  }

  export const TipSubjektaBrowseKey = 'Adresar/TipSubjektaBrowse';
  export interface TipSubjektaBrowse {
    ID?: string;
    IsPredefiniraniTip?: boolean;
    Naziv?: string;
    JePravnaOsoba?: boolean;
    Active?: boolean;
  }

  export const TipSubjektaLookupFilterKey = 'Adresar/TipSubjektaLookupFilter';
  export interface TipSubjektaLookupFilter {
    JePravnaOsoba?: boolean;
  }

  export const PredefiniraniTipSubjektaKey = 'Adresar/PredefiniraniTipSubjekta';
  export interface PredefiniraniTipSubjekta {
    ID?: string;
    ActionDate?: Date;
    TipSubjektaID?: string;
    ExecutedByID?: string;
  }

  export const CtxKontaktKey = 'Adresar/CtxKontakt';
  export interface CtxKontakt {
    ID?: string;
    CtxId?: number;
  }

  export const ComputeKontaktiCTXFTSKljucneRijeciKey =
    'Adresar/ComputeKontaktiCTXFTSKljucneRijeci';
  export interface ComputeKontaktiCTXFTSKljucneRijeci {
    ID?: string;
    CTXSubjektID?: string;
  }

  export const SubjektForConnectorKey = 'Adresar/SubjektForConnector';
  export interface SubjektForConnector {
    ID?: string;
    SubjektCtxId?: number;
    PravnaOsoba?: boolean;
    Oib?: string;
    Naziv?: string;
    Adresa?: string;
    PostanskiBroj?: string;
    Mjesto?: string;
    Drzava?: string;
    BrojcanaOznaka?: string;
  }

  export const OsnovniSubjektCustomFieldsSearchKey =
    'Adresar/OsnovniSubjektCustomFieldsSearch';
  export interface OsnovniSubjektCustomFieldsSearch {}

  export const NaseljeFindByNazivAndPostanskiBrojKey =
    'Adresar/NaseljeFindByNazivAndPostanskiBroj';
  export interface NaseljeFindByNazivAndPostanskiBroj {
    Pattern?: string;
  }

  export const NaseljeLookupExKey = 'Adresar/NaseljeLookupEx';
  export interface NaseljeLookupEx {
    ID?: string;
    NaseljePostanskiBroj?: string;
  }

  export const ZupanijaLookupKey = 'Adresar/ZupanijaLookup';
  export interface ZupanijaLookup {
    ID?: string;
    Naziv?: string;
  }

  export const PravnaOsobaLookupKey = 'Adresar/PravnaOsobaLookup';
  export interface PravnaOsobaLookup {
    ID?: string;
    Naziv?: string;
  }

  export const VrstaKontaktDetaljaLookupKey =
    'Adresar/VrstaKontaktDetaljaLookup';
  export interface VrstaKontaktDetaljaLookup {
    ID?: string;
    Naziv?: string;
  }

  export const MBG_MbgFilterKey = 'Adresar/MBG_MbgFilter';
  export interface MBG_MbgFilter {}

  export const OIB_Mod11_10FilterKey = 'Adresar/OIB_Mod11_10Filter';
  export interface OIB_Mod11_10Filter {}

  export const DvoslovnaOznaka_RegExMatchFilterKey =
    'Adresar/DvoslovnaOznaka_RegExMatchFilter';
  export interface DvoslovnaOznaka_RegExMatchFilter {}

  export const TroslovnaOznaka_RegExMatchFilterKey =
    'Adresar/TroslovnaOznaka_RegExMatchFilter';
  export interface TroslovnaOznaka_RegExMatchFilter {}

  export const BrojcanaOznaka_RegExMatchFilterKey =
    'Adresar/BrojcanaOznaka_RegExMatchFilter';
  export interface BrojcanaOznaka_RegExMatchFilter {}

  export const MB_RegExMatchFilterKey = 'Adresar/MB_RegExMatchFilter';
  export interface MB_RegExMatchFilter {}

  export const MBS_RegExMatchFilterKey = 'Adresar/MBS_RegExMatchFilter';
  export interface MBS_RegExMatchFilter {}

  export const InozemniPorezniBroj_RegExMatchFilterKey =
    'Adresar/InozemniPorezniBroj_RegExMatchFilter';
  export interface InozemniPorezniBroj_RegExMatchFilter {}

  export const MBG_RegExMatchFilterKey = 'Adresar/MBG_RegExMatchFilter';
  export interface MBG_RegExMatchFilter {}

  export const OIB_RegExMatchFilterKey = 'Adresar/OIB_RegExMatchFilter';
  export interface OIB_RegExMatchFilter {}

  export const ValidForJePravnaOsobaKey = 'Adresar/ValidForJePravnaOsoba';
  export interface ValidForJePravnaOsoba {}

  export const ValidTipSubjektaForJePravnaOsobaKey =
    'Adresar/ValidTipSubjektaForJePravnaOsoba';
  export interface ValidTipSubjektaForJePravnaOsoba {}

  export const DvoslovnaOznaka_MaxLengthFilterKey =
    'Adresar/DvoslovnaOznaka_MaxLengthFilter';
  export interface DvoslovnaOznaka_MaxLengthFilter {}

  export const TroslovnaOznaka_MaxLengthFilterKey =
    'Adresar/TroslovnaOznaka_MaxLengthFilter';
  export interface TroslovnaOznaka_MaxLengthFilter {}

  export const DvoslovnaOznaka_MinLengthFilterKey =
    'Adresar/DvoslovnaOznaka_MinLengthFilter';
  export interface DvoslovnaOznaka_MinLengthFilter {}

  export const TroslovnaOznaka_MinLengthFilterKey =
    'Adresar/TroslovnaOznaka_MinLengthFilter';
  export interface TroslovnaOznaka_MinLengthFilter {}

  export const SystemRequiredDatumKreiranjaKey =
    'Adresar/SystemRequiredDatumKreiranja';
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredCtxIdKey = 'Adresar/SystemRequiredCtxId';
  export interface SystemRequiredCtxId {}

  export const SystemRequiredActiveKey = 'Adresar/SystemRequiredActive';
  export interface SystemRequiredActive {}

  export const SystemRequiredKontaktKey = 'Adresar/SystemRequiredKontakt';
  export interface SystemRequiredKontakt {}
}

export module Centrix1Migracija {
  export const InternaDostavnaKnjigaPismenaKey =
    'Centrix1Migracija/InternaDostavnaKnjigaPismena';
  export interface InternaDostavnaKnjigaPismena {
    ID?: string;
    DatumKreiranja?: Date;
    Status?: string;
    Primjedba?: string;
    PismenoID?: string;
    KreiraoID?: string;
  }

  export const InternaDostavnaKnjigaPismenaBrowseKey =
    'Centrix1Migracija/InternaDostavnaKnjigaPismenaBrowse';
  export interface InternaDostavnaKnjigaPismenaBrowse {
    ID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    Status?: string;
    Primjedba?: string;
    KreiraoNaziv?: string;
  }

  export const PredmetRazvodjenjeKey = 'Centrix1Migracija/PredmetRazvodjenje';
  export interface PredmetRazvodjenje {
    ID?: string;
    DatumRazvodjenja?: Date;
    OznakaRazvodjenja?: string;
    Primjedba?: string;
    PredmetID?: string;
    KreiraoID?: string;
  }

  export const PredmetRazvodjenjeBrowseKey =
    'Centrix1Migracija/PredmetRazvodjenjeBrowse';
  export interface PredmetRazvodjenjeBrowse {
    ID?: string;
    PredmetID?: string;
    DatumRazvodjenja?: Date;
    OznakaRazvodjenja?: string;
    Primjedba?: string;
    KreiraoNaziv?: string;
  }
}

export module EvidencijaPismena {
  export const DocumentTemplateKey = 'EvidencijaPismena/DocumentTemplate';
  export interface DocumentTemplate {
    ID?: string;
    Name: string;
    Comment?: string;
    DocumentTemplateUsageID?: string;
  }

  export const DocumentTemplateContentKey =
    'EvidencijaPismena/DocumentTemplateContent';
  export interface DocumentTemplateContent {
    ID?: string;
    DocumentTemplateID?: string;
    CreatedDate?: Date;
    FileExtension?: string;
    CreatedByID?: string;
  }

  export const DocumentTemplateBrowseKey =
    'EvidencijaPismena/DocumentTemplateBrowse';
  export interface DocumentTemplateBrowse {
    ID?: string;
    Name?: string;
    Comment?: string;
    DocumentTemplateUsageID?: string;
    DocumentVersionLastModifiedDate?: Date;
    TipoviPredmeta?: string;
    Kreirao?: string;
    LastDocumentTemplateContentID?: string;
  }

  export const DocumentTemplateExtKey = 'EvidencijaPismena/DocumentTemplateExt';
  export interface DocumentTemplateExt {
    ID?: string;
    TipoviPredmeta?: string;
    LastModified?: Date;
    LastDocumentTemplateContentID?: string;
    FileName?: string;
    LastCreatedByID?: string;
  }

  export const DocumentTemplateUsageKey =
    'EvidencijaPismena/DocumentTemplateUsage';
  export interface DocumentTemplateUsage {
    ID?: string;
    Name: string;
  }

  export const DocumentTemplateLookupKey =
    'EvidencijaPismena/DocumentTemplateLookup';
  export interface DocumentTemplateLookup {
    ID?: string;
    Name?: string;
    DocumentTemplateUsageID?: string;
  }

  export const DocumentTemplateUsageFilterKey =
    'EvidencijaPismena/DocumentTemplateUsageFilter';
  export interface DocumentTemplateUsageFilter {
    DocumentTemplateUsageID?: string;
    DocumentID?: string;
  }

  export const WithDocumentVersionOnlyKey =
    'EvidencijaPismena/WithDocumentVersionOnly';
  export interface WithDocumentVersionOnly {}

  export const DocumentTemplateTipPredmetaKey =
    'EvidencijaPismena/DocumentTemplateTipPredmeta';
  export interface DocumentTemplateTipPredmeta {
    ID?: string;
    DocumentTemplateID: string;
    TipPredmetaID: string;
  }

  export const DocumentTemplateTipPredmetaBrowseKey =
    'EvidencijaPismena/DocumentTemplateTipPredmetaBrowse';
  export interface DocumentTemplateTipPredmetaBrowse {
    ID?: string;
    DocumentTemplateID?: string;
    TipPredmetaNaziv?: string;
    TipPredmetaActive?: string;
  }

  export const MoguciTipoviPredmetaKey =
    'EvidencijaPismena/MoguciTipoviPredmeta';
  export interface MoguciTipoviPredmeta {
    DocumentTemplateID?: string;
  }

  export const DocumentTemplatePismenoKey =
    'EvidencijaPismena/DocumentTemplatePismeno';
  export interface DocumentTemplatePismeno {
    DocumentTemplateID?: string;
    IsDmsTemplate?: boolean;
    DocumentID?: string;
  }

  export const DocumentTemplatePismenoBaseDsKey =
    'EvidencijaPismena/DocumentTemplatePismenoBaseDs';
  export interface DocumentTemplatePismenoBaseDs {
    ID?: string;
    PredmetKlasa?: string;
    PredmetPocetak?: string;
    PredmetPocetakTekst?: string;
    PredmetRokZaRjesavanje?: string;
    PredmetRokZaRjesavanjeTekst?: string;
    PredmetReferent?: string;
    PismenoDatumNastanka?: string;
    PismenoDatumNastankaTekst?: string;
    PismenoPravnaOsobaID?: string;
    PismenoFizickaOsobaID?: string;
    PismenoOsnovniSubjektID?: string;
    PismenoOsnovniSubjektDostavnaPostaID?: string;
    PismenoOsnovniSubjektNaseljeID?: string;
    PismenoOsnovniSubjektDrzavaID?: string;
    PismenoOsnovniSubjektMjestoID?: string;
    PismenoOsnovniSubjektAdresaID?: string;
    PredmetID?: string;
    NadleznostID?: string;
    PredmetUstrojstvenaJedinicaID?: string;
    PredmetLokacijaID?: string;
  }

  export const DocumentTemplatePrilogKey =
    'EvidencijaPismena/DocumentTemplatePrilog';
  export interface DocumentTemplatePrilog {
    DocumentTemplateID?: string;
    IsDmsTemplate?: boolean;
    DocumentID?: string;
  }

  export const DocumentTemplatePrilogBaseDsKey =
    'EvidencijaPismena/DocumentTemplatePrilogBaseDs';
  export interface DocumentTemplatePrilogBaseDs {
    ID?: string;
    PredmetKlasa?: string;
    PredmetPocetak?: string;
    PredmetPocetakTekst?: string;
    PredmetRokZaRjesavanje?: string;
    PredmetRokZaRjesavanjeTekst?: string;
    PredmetReferent?: string;
    PrilogDatumNastanka?: string;
    PrilogDatumNastankaTekst?: string;
    PismenoBarkod?: string;
    PismenoNaziv?: string;
    PismenoUrudzbeniBroj?: string;
    PismenoDatumNastanka?: string;
    PismenoDatumNastankaTekst?: string;
    PismenoPravnaOsobaID?: string;
    PismenoFizickaOsobaID?: string;
    PismenoOsnovniSubjektID?: string;
    PismenoOsnovniSubjektDostavnaPostaID?: string;
    PismenoOsnovniSubjektNaseljeID?: string;
    PismenoOsnovniSubjektDrzavaID?: string;
    PismenoOsnovniSubjektMjestoID?: string;
    PismenoOsnovniSubjektAdresaID?: string;
    PismenoID?: string;
    PredmetID?: string;
    NadleznostID?: string;
    PrilogVrstaPrilogaID?: string;
    PredmetUstrojstvenaJedinicaID?: string;
    PredmetLokacijaID?: string;
  }

  export const FiksniDioKlaseUpravnostDosjeKey =
    'EvidencijaPismena/FiksniDioKlaseUpravnostDosje';
  export interface FiksniDioKlaseUpravnostDosje {
    ID?: string;
    FiksniDioKlase?: string;
  }

  export const DosjeVrstaUpravnogPostupkaKey =
    'EvidencijaPismena/DosjeVrstaUpravnogPostupka';
  export interface DosjeVrstaUpravnogPostupka {
    ID?: string;
    DosjeID: string;
    VrijediOd: Date;
    Naziv?: string;
    VrstaUpravnogPostupkaID: string;
  }

  export const UpravnostDosjeFiksniDioKlaseKey =
    'EvidencijaPismena/UpravnostDosjeFiksniDioKlase';
  export interface UpravnostDosjeFiksniDioKlase {
    ID?: string;
    FiksniDioKlase?: string;
  }

  export const UpravnostDosjeLookupKey =
    'EvidencijaPismena/UpravnostDosjeLookup';
  export interface UpravnostDosjeLookup {
    ID?: string;
    FiksniDioKlase?: string;
  }

  export const TipDokumentaDropdownKey =
    'EvidencijaPismena/TipDokumentaDropdown';
  export interface TipDokumentaDropdown {
    ID?: string;
    Naziv: string;
    Filter: string;
    Sifra?: number;
  }

  export const TipVremenskogFilteraDropdownKey =
    'EvidencijaPismena/TipVremenskogFilteraDropdown';
  export interface TipVremenskogFilteraDropdown {
    ID?: string;
    Naziv: string;
    Filter: string;
    Sifra?: number;
  }

  export const PrijemniStambiljKey = 'EvidencijaPismena/PrijemniStambilj';
  export interface PrijemniStambilj {
    IspisID?: string;
  }

  export const PrijemniStambilj_DataSourceKey =
    'EvidencijaPismena/PrijemniStambilj_DataSource';
  export interface PrijemniStambilj_DataSource {
    ID?: string;
    Primljeno?: string;
    KlasifikacijskaOznaka?: string;
    OUUJ?: string;
    UrudzbeniBroj?: string;
    Prilozi?: string;
    Vrijednost?: string;
    Barkod?: string;
  }

  export const OmotSpisaNeupravnogPredmetaKey =
    'EvidencijaPismena/OmotSpisaNeupravnogPredmeta';
  export interface OmotSpisaNeupravnogPredmeta {
    IspisID?: string;
  }

  export const OmotSpisaNeupravnogPredmeta_DataSourceKey =
    'EvidencijaPismena/OmotSpisaNeupravnogPredmeta_DataSource';
  export interface OmotSpisaNeupravnogPredmeta_DataSource {
    ID?: string;
    NazivTijela?: string;
    OUUJ?: string;
    KlasifikacijskaOznaka?: string;
    Predmet?: string;
  }

  export const PopisAkataIspisKey = 'EvidencijaPismena/PopisAkataIspis';
  export interface PopisAkataIspis {
    IspisID?: string;
  }

  export const PopisAkata_DataSourceKey =
    'EvidencijaPismena/PopisAkata_DataSource';
  export interface PopisAkata_DataSource {
    ID?: string;
    PredmetID?: string;
    OdabranaKlasa?: string;
    UrudzbeniBroj?: string;
    DatumPrimitka?: string;
    NazivAkta?: string;
    NazivPriloga?: string;
    BrojPriloga?: string;
    Primjedba?: string;
  }

  export const OmotSpisaPredmetaUpravnogPostupkaKey =
    'EvidencijaPismena/OmotSpisaPredmetaUpravnogPostupka';
  export interface OmotSpisaPredmetaUpravnogPostupka {
    IspisID?: string;
  }

  export const OmotSpisaPredmetaUpravnogPostupka_Glava_DataSourceKey =
    'EvidencijaPismena/OmotSpisaPredmetaUpravnogPostupka_Glava_DataSource';
  export interface OmotSpisaPredmetaUpravnogPostupka_Glava_DataSource {
    ID?: string;
    PredmetID?: string;
    OznakaUpravnogPredmeta?: string;
    NazivTijela?: string;
    OUUJ?: string;
    RokZaRjesavanje?: string;
    KlasifikacijskaOznaka?: string;
    Predmet?: string;
  }

  export const OmotSpisaPredmetaUpravnogPostupka_PrvostupanjskiPostupak_DataSourceKey =
    'EvidencijaPismena/OmotSpisaPredmetaUpravnogPostupka_PrvostupanjskiPostupak_DataSource';
  export interface OmotSpisaPredmetaUpravnogPostupka_PrvostupanjskiPostupak_DataSource {
    ID?: string;
    PredmetID?: string;
    Zahtjev_Odbacen?: string;
    Zahtjev_Odbijen?: string;
    Zahtjev_Usvojen?: string;
    Zalba1_Odbacena?: string;
    Zalba1_RjesenjeZamjenjenoNovim?: string;
    Zalba1_ZalbaDostavljenaDrugostupanjkomTijelu?: string;
    ZalbaPrvostupanjskomDana?: string;
    ZahtjevDana?: string;
    RokZaRjesavanje?: string;
    PostupakObustavljen?: string;
  }

  export const OmotSpisaPredmetaUpravnogPostupka_DrugostupanjskiPostupak_DataSourceKey =
    'EvidencijaPismena/OmotSpisaPredmetaUpravnogPostupka_DrugostupanjskiPostupak_DataSource';
  export interface OmotSpisaPredmetaUpravnogPostupka_DrugostupanjskiPostupak_DataSource {
    ID?: string;
    PredmetID?: string;
    Zalba2_Odbacena?: string;
    Zalba2_Odbijena?: string;
    Zalba2_RjesenjeJeIzmjenjeno?: string;
    Zalba2_RjesenjeJePonisteno?: string;
    Zalba2_RjesenjeJeProglasenoNistavnim?: string;
    Razlog1?: string;
    Razlog2?: string;
    Razlog3?: string;
    ZalbaDrugostupanjskomTijelu?: string;
    PostupakObustavljen?: string;
  }

  export const PismenaPromijeniTipKey = 'EvidencijaPismena/PismenaPromijeniTip';
  export interface PismenaPromijeniTip {
    ID?: string;
    DatumKreiranja?: Date;
    PismenoID: string;
    TipPismenaID?: string;
    KorisnikID?: string;
  }

  export const ValidForPromijeniTipPismenaKey =
    'EvidencijaPismena/ValidForPromijeniTipPismena';
  export interface ValidForPromijeniTipPismena {}

  export const PismenaPromijeniTipBrowseKey =
    'EvidencijaPismena/PismenaPromijeniTipBrowse';
  export interface PismenaPromijeniTipBrowse {
    ID?: string;
    PismenoID?: string;
    TipPismenaID?: string;
    DatumKreiranja?: Date;
    Active?: boolean;
  }

  export const PismenoKey = 'EvidencijaPismena/Pismeno';
  export interface Pismeno {
    ID?: string;
    DatumKreiranja?: Date;
    Barkod?: string;
    PosiljateljIliPodnositeljID?: string;
    Naziv: string;
    DatumNastankaAktaIliPrimitkaPismena: Date;
    JePodnesak: boolean;
    BrojPriloga: number;
    Vrijednost?: string;
    SluzbenaBiljeska?: string;
    OmotnicaPrilozena: boolean;
    PismenoNaKojeJePrilozenaOmotnicaID?: string;
    KlasifikacijskiBrojPosiljatelja?: string;
    UrudzbeniBrojPosiljatelja?: string;
    DatumNastankaPismena?: Date;
    RedniBroj?: number;
    UrudzbeniBroj?: string;
    ActiveReason?: string;
    PredmetID: string;
    GlavniPredmetID?: string;
    KreiraoID?: string;
    UstrojstvenaJedinicaID?: string;
    StvarateljID?: string;
    UNadleznostiID?: string;
    Active?: boolean;
  }

  export const DocumentTemplatePismenoDsKey =
    'EvidencijaPismena/DocumentTemplatePismenoDs';
  export interface DocumentTemplatePismenoDs {
    ID?: string;
    PredmetKlasa?: string;
    PredmetNaziv?: string;
    PredmetPocetak?: string;
    PredmetPocetakTekst?: string;
    PredmetRokZaRjesavanje?: string;
    PredmetRokZaRjesavanjeTekst?: string;
    PredmetBarkod?: string;
    PredmetUstrojstvenaJedinicaNaziv?: string;
    PredmetReferent?: string;
    PredmetLokacijaNaziv?: string;
    PredmetLokacijaAdresa?: string;
    PismenoBarkod?: string;
    PismenoNaziv?: string;
    PismenoUrudzbeniBroj?: string;
    PismenoDatumNastanka?: string;
    PismenoDatumNastankaTekst?: string;
    PismenoBrojPriloga?: number;
    StrankaNaziv?: string;
    StrankaUlicaIKucniBroj?: string;
    StrankaPostanskiBroj?: string;
    StrankaMjestoNaziv?: string;
    StrankaDrzavaSluzbeniNaziv?: string;
    StrankaOib?: string;
    StrankaMbg?: string;
    StrankaMbs?: string;
    StrankaMb?: string;
    MigriraniBarkodPismeno?: string;
    PredmetSignatura?: string;
    PredmetZaduzenje?: string;
  }

  export const PismenoAdditionalDataKey =
    'EvidencijaPismena/PismenoAdditionalData';
  export interface PismenoAdditionalData {
    ID?: string;
    TipPismenaID?: string;
    StupanjTajnostiID?: string;
  }

  export const DatumNastankaAktaIliPrimitkaPismenaDUBuducnostiKey =
    'EvidencijaPismena/DatumNastankaAktaIliPrimitkaPismenaDUBuducnosti';
  export interface DatumNastankaAktaIliPrimitkaPismenaDUBuducnosti {}

  export const DatumNastankaAktaIliPrimitkaPismenaDatumOsnivanjaKey =
    'EvidencijaPismena/DatumNastankaAktaIliPrimitkaPismenaDatumOsnivanja';
  export interface DatumNastankaAktaIliPrimitkaPismenaDatumOsnivanja {}

  export const VratiURadPoslijeUrudzbiranjaKey =
    'EvidencijaPismena/VratiURadPoslijeUrudzbiranja';
  export interface VratiURadPoslijeUrudzbiranja {
    Pismeno: string;
  }

  export const UpsertPismenoKey = 'EvidencijaPismena/UpsertPismeno';
  export interface UpsertPismeno {
    Pismeno: string;
    PismenoPrilozi?: string;
    PismenoDodatneOznake?: string;
    PismenoSluzbeneBiljeske?: string;
    TipPismenaID?: string;
    ForceInsert?: boolean;
    ForceUpdate?: boolean;
    StupanjTajnostiID?: string;
  }

  export const PismenoSmartSearchAutoCompleteKey =
    'EvidencijaPismena/PismenoSmartSearchAutoComplete';
  export interface PismenoSmartSearchAutoComplete {
    ID?: string;
    Barkod?: string;
  }

  export const PismenoBarkodKey = 'EvidencijaPismena/PismenoBarkod';
  export interface PismenoBarkod {
    ID?: string;
    Barkod?: string;
    PredmetBarkod?: string;
  }

  export const PismenoBrowseKey = 'EvidencijaPismena/PismenoBrowse';
  export interface PismenoBrowse {
    ID?: string;
    Active?: boolean;
    ActiveReason?: string;
    UrudzbeniBroj?: string;
    Naziv?: string;
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    KlasifikacijskiBrojPosiljatelja?: string;
    UrudzbeniBrojPosiljatelja?: string;
    JePodnesak?: boolean;
    Barkod?: string;
    RedniBroj?: number;
    DatumKreiranja?: Date;
    PredmetID?: string;
    PredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    PosiljateljIliStvaratelj?: string;
    PrilogCount?: number;
    UNadleznosti?: string;
    DodatneOznake?: string;
    StatusPredmetaNaziv?: string;
    StatusPismenaNaziv?: string;
    DatumStatusa?: Date;
    TipPismenaNaziv?: string;
    TipPredmetaNaziv?: string;
    Razvodjenje?: string;
    StupanjTajnosti?: string;
  }

  export const PismenoBrowseThisIDsOnlyKey =
    'EvidencijaPismena/PismenoBrowseThisIDsOnly';
  export interface PismenoBrowseThisIDsOnly {
    IDListJson?: string;
  }

  export const PismenoBrowseIPovezaniKey =
    'EvidencijaPismena/PismenoBrowseIPovezani';
  export interface PismenoBrowseIPovezani {
    PredmetID?: string;
  }

  export const PismenoExtendedKey = 'EvidencijaPismena/PismenoExtended';
  export interface PismenoExtended {
    ID?: string;
    PosiljateljIliStvaratelj?: string;
    DodatneOznake?: string;
    PrilogCount?: number;
    PredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    Active?: boolean;
    UrudzbeniBroj?: string;
    Naziv?: string;
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    KlasifikacijskiBrojPosiljatelja?: string;
    UrudzbeniBrojPosiljatelja?: string;
    ActiveReason?: string;
    JePodnesak?: boolean;
    Barkod?: string;
    PredmetPovezivanje?: string;
    PredmetBrisan?: boolean;
    UNadleznostiID?: string;
    GlavniPredmetID?: string;
    StatusPredmetaNaziv?: string;
    StatusPismenaNaziv?: string;
    DatumStatusa?: Date;
    TipPismenaNaziv?: string;
    TipPredmetaNaziv?: string;
    PredmetID?: string;
    StatusPismenaID?: string;
    StatusPredmetaID?: string;
  }

  export const PismenoLookupKey = 'EvidencijaPismena/PismenoLookup';
  export interface PismenoLookup {
    ID?: string;
    Active?: boolean;
    PredmetID?: string;
    UrudzbeniBroj?: string;
    Naziv?: string;
    Barkod?: string;
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    PredmetKlasifikacijskaOznaka?: string;
  }

  export const SearchWithActiveKey = 'EvidencijaPismena/SearchWithActive';
  export interface SearchWithActive {
    Pattern?: string;
  }

  export const SearchKey = 'EvidencijaPismena/Search';
  export interface Search {
    Pattern?: string;
  }

  export const DodatnaOznakaKey = 'EvidencijaPismena/DodatnaOznaka';
  export interface DodatnaOznaka {
    ID?: string;
    Naziv: string;
  }

  export const DodatnaOznakaBrowseKey = 'EvidencijaPismena/DodatnaOznakaBrowse';
  export interface DodatnaOznakaBrowse {
    ID?: string;
    Naziv?: string;
  }

  export const PismenoDodatnaOznakaKey =
    'EvidencijaPismena/PismenoDodatnaOznaka';
  export interface PismenoDodatnaOznaka {
    ID?: string;
    OznakaID: string;
    PismenoID: string;
  }

  export const UpdatePismenoDodatnaOznakaKey =
    'EvidencijaPismena/UpdatePismenoDodatnaOznaka';
  export interface UpdatePismenoDodatnaOznaka {
    PismenoID?: string;
    DodatneOznake?: string;
  }

  export const ReferenceNonExistentStvarateljKey =
    'EvidencijaPismena/ReferenceNonExistentStvaratelj';
  export interface ReferenceNonExistentStvaratelj {}

  export const UstrojstvenaJedinicaIliZaposlenik_PismenoEditLookupKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_PismenoEditLookup';
  export interface UstrojstvenaJedinicaIliZaposlenik_PismenoEditLookup {
    HistoryLookupStvaratelj?: string;
  }

  export const PismenoKorisnickePostavkeKey =
    'EvidencijaPismena/PismenoKorisnickePostavke';
  export interface PismenoKorisnickePostavke {
    ID?: string;
    PredefiniraniStvarateljAktaID: string;
  }

  export const GetForUserOrDefaultKey = 'EvidencijaPismena/GetForUserOrDefault';
  export interface GetForUserOrDefault {
    ID?: string;
  }

  export const GetForCurrentUserOrDefaultKey =
    'EvidencijaPismena/GetForCurrentUserOrDefault';
  export interface GetForCurrentUserOrDefault {}

  export const PredefiniraniStvarateljAktaKey =
    'EvidencijaPismena/PredefiniraniStvarateljAkta';
  export interface PredefiniraniStvarateljAkta {
    ID?: string;
    Naziv?: string;
    Opis?: string;
  }

  export const PredefiniraniStvarateljAktaFormattedKey =
    'EvidencijaPismena/PredefiniraniStvarateljAktaFormatted';
  export interface PredefiniraniStvarateljAktaFormatted {
    ID?: string;
    NazivFormatted?: string;
  }

  export const GetForCurrentUserKey = 'EvidencijaPismena/GetForCurrentUser';
  export interface GetForCurrentUser {}

  export const StvarateljAktaFromPismenoKorisnickePostavkeKey =
    'EvidencijaPismena/StvarateljAktaFromPismenoKorisnickePostavke';
  export interface StvarateljAktaFromPismenoKorisnickePostavke {
    ID?: string;
    StvarateljID?: string;
  }

  export const GetForPredmetKey = 'EvidencijaPismena/GetForPredmet';
  export interface GetForPredmet {
    PredmetID?: string;
    UNadleznostiID?: string;
    PredefiniraniStvarateljID?: string;
  }

  export const PismenoEventDataKey = 'EvidencijaPismena/PismenoEventData';
  export interface PismenoEventData {
    ID?: string;
    TipPismenaID?: string;
  }

  export const PismenoEventDataPersistedKey =
    'EvidencijaPismena/PismenoEventDataPersisted';
  export interface PismenoEventDataPersisted {
    ID?: string;
    TipPismenaID?: string;
  }

  export const PismenoPredmetLookupKey =
    'EvidencijaPismena/PismenoPredmetLookup';
  export interface PismenoPredmetLookup {
    ID?: string;
    PredmetID?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    PredmetBarkod?: string;
    PredmetNaziv?: string;
    StrankaNazivMjestoNaziv?: string;
  }

  export const PismenoStvarateljKey = 'EvidencijaPismena/PismenoStvaratelj';
  export interface PismenoStvaratelj {
    ID?: string;
    StvarateljID?: string;
  }

  export const PismenoStvarateljLookupKey =
    'EvidencijaPismena/PismenoStvarateljLookup';
  export interface PismenoStvarateljLookup {
    ID?: string;
    IsZaposlenik?: boolean;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    PotpunaBrojcanaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    ActiveUntil?: Date;
    EntityID?: string;
    Active?: boolean;
    ActiveSince?: Date;
    BrojcanaOznaka?: string;
  }

  export const PismenoBrisanjeKey = 'EvidencijaPismena/PismenoBrisanje';
  export interface PismenoBrisanje {
    ID?: string;
    PismenoID: string;
    DatumKreiranja?: Date;
    JePonistavanjeBrisanja: boolean;
    ActiveReason?: string;
    KreiraoID: string;
  }

  export const PismenoValidForPismenoDeleteKey =
    'EvidencijaPismena/PismenoValidForPismenoDelete';
  export interface PismenoValidForPismenoDelete {}

  export const ValidForPismenoUndoDeleteKey =
    'EvidencijaPismena/ValidForPismenoUndoDelete';
  export interface ValidForPismenoUndoDelete {}

  export const BrisanjeAktiviranjePismenaKey =
    'EvidencijaPismena/BrisanjeAktiviranjePismena';
  export interface BrisanjeAktiviranjePismena {
    PismenoID?: string;
    IsActive?: boolean;
    ActiveReason?: string;
  }

  export const ComputePismenoFTSKljucneRijeciKey =
    'EvidencijaPismena/ComputePismenoFTSKljucneRijeci';
  export interface ComputePismenoFTSKljucneRijeci {
    ID?: string;
    PredmetID?: string;
    KljucneRijeci?: string;
    PismenoNaziv?: string;
  }

  export const PismenoFTSKey = 'EvidencijaPismena/PismenoFTS';
  export interface PismenoFTS {
    ID?: string;
    KljucneRijeci?: string;
    PismenoNaziv?: string;
    Razvodjenje?: string;
    CTXPismenoID?: string;
  }

  export const PismenoBrowseFTSSearchKey =
    'EvidencijaPismena/PismenoBrowseFTSSearch';
  export interface PismenoBrowseFTSSearch {
    Pattern?: string;
  }

  export const PismenoExtensionsDefinitionKey =
    'EvidencijaPismena/PismenoExtensionsDefinition';
  export interface PismenoExtensionsDefinition {
    ID?: string;
    Field?: string;
    FieldValue?: string;
    ControllerName: string;
    ViewModelType: string;
  }

  export const VrstaGeneriranjaUrudzbenogBrojaAktaKey =
    'EvidencijaPismena/VrstaGeneriranjaUrudzbenogBrojaAkta';
  export interface VrstaGeneriranjaUrudzbenogBrojaAkta {
    ID?: string;
    Sifra: number;
    Opis: string;
    JeVrsta1?: boolean;
    JeVrsta2?: boolean;
    JeVrsta3?: boolean;
  }

  export const OdabranaVrstaGeneriranjaUrudzbenogBrojaAktaKey =
    'EvidencijaPismena/OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta';
  export interface OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta {
    ID?: string;
    VrstaGeneriranjaUrudzbenogBrojaAktaID: string;
    RazinaPovlacenjaBrojcaneOznake?: number;
    PonovnoKoristenjeObrisanih: boolean;
    DodavnjeNulaDoBrojaZnamenki: number;
    ActiveSince?: Date;
  }

  export const ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAktaKey =
    'EvidencijaPismena/ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAkta';
  export interface ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAkta {
    ID?: string;
    VrstaGeneriranjaUrudzbenogBrojaAktaID: string;
    ZaposlenikID: string;
  }

  export const ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAktaBrowseKey =
    'EvidencijaPismena/ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAktaBrowse';
  export interface ZaposlenikVrstaGeneriranjaUrudzbenogBrojaAktaBrowse {
    ID?: string;
    BrOznakaNazivUJNaziv?: string;
    Sifra?: number;
    Opis?: string;
  }

  export const PodatakZaGeneriranjeUrudzbenogBrojaKey =
    'EvidencijaPismena/PodatakZaGeneriranjeUrudzbenogBroja';
  export interface PodatakZaGeneriranjeUrudzbenogBroja {
    ID?: string;
    PismenoID?: string;
    PredmetID?: string;
    StvarateljID?: string;
    JePodnesak?: boolean;
    BrojcanaOznakaStvaratelja?: string;
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    GodinaNastankaAktaIliPrimitkaPodneska?: number;
    GodinaNastankaAktaIliPrimitkaPodneskaKratka?: string;
    RedniBroj?: number;
    RedniBrojFormatiran?: string;
  }

  export const PismenoRedniBrojResultKey =
    'EvidencijaPismena/PismenoRedniBrojResult';
  export interface PismenoRedniBrojResult {
    RedniBroj?: number;
    BrojcanaOznakaStvaratelja?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    IsZaposlenik?: boolean;
    VrstaGeneriranja?: number;
    RazinaPovlacenja?: number;
    DodavnjeNulaDoBrojaZnamenki?: number;
  }

  export const PismenoPismenoBrowseKey =
    'EvidencijaPismena/PismenoPismenoBrowse';
  export interface PismenoPismenoBrowse {
    ID?: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    KlasifikacijskaOznakaGlavnog?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBrojGlavnog?: string;
    UrudzbeniBroj?: string;
  }

  export const PismenoPismenoComputedKey =
    'EvidencijaPismena/PismenoPismenoComputed';
  export interface PismenoPismenoComputed {
    ID?: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    KlasifikacijskaOznakaGlavnog?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBrojGlavnog?: string;
    UrudzbeniBroj?: string;
  }

  export const GetByGlavnoPismenoVezanoPismenoIDsKey =
    'EvidencijaPismena/GetByGlavnoPismenoVezanoPismenoIDs';
  export interface GetByGlavnoPismenoVezanoPismenoIDs {
    GlavnoPismenoVezanoPismenoListJson?: string;
  }

  export const PismenoPismenoPovezivanjeEventKey =
    'EvidencijaPismena/PismenoPismenoPovezivanjeEvent';
  export interface PismenoPismenoPovezivanjeEvent {
    ID?: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const ValidForPovezivanjeKey = 'EvidencijaPismena/ValidForPovezivanje';
  export interface ValidForPovezivanje {}

  export const PismenoPismenoPonistavanjeVezivanjaEventKey =
    'EvidencijaPismena/PismenoPismenoPonistavanjeVezivanjaEvent';
  export interface PismenoPismenoPonistavanjeVezivanjaEvent {
    ID?: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const ValidForPonistavanjePovezivanjaKey =
    'EvidencijaPismena/ValidForPonistavanjePovezivanja';
  export interface ValidForPonistavanjePovezivanja {}

  export const ComputePismenoPismenoPovezaniKey =
    'EvidencijaPismena/ComputePismenoPismenoPovezani';
  export interface ComputePismenoPismenoPovezani {
    ID?: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    DatumKreiranja?: Date;
  }

  export const PismenoPismenoPovezaniPersistedKey =
    'EvidencijaPismena/PismenoPismenoPovezaniPersisted';
  export interface PismenoPismenoPovezaniPersisted {
    ID?: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
  }

  export const PismenoPismenoPovezivanjeLogKey =
    'EvidencijaPismena/PismenoPismenoPovezivanjeLog';
  export interface PismenoPismenoPovezivanjeLog {
    ID?: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    ZadnjaAkcija?: string;
    DatumZadnjeAkcije?: Date;
  }

  export const PismenoVezanoNaPismenoBrowseKey =
    'EvidencijaPismena/PismenoVezanoNaPismenoBrowse';
  export interface PismenoVezanoNaPismenoBrowse {
    ID?: string;
    GlavnoPismenoID?: string;
    VezanoPismenoID?: string;
    Naziv?: string;
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    PredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    PosiljateljIliStvaratelj?: string;
  }

  export const PismenoVezanoNaPismenoBrowseFTSSearchKey =
    'EvidencijaPismena/PismenoVezanoNaPismenoBrowseFTSSearch';
  export interface PismenoVezanoNaPismenoBrowseFTSSearch {
    Pattern?: string;
  }

  export const PredmetKey = 'EvidencijaPismena/Predmet';
  export interface Predmet {
    ID?: string;
    DatumKreiranja?: Date;
    Barkod?: string;
    DosjeID: string;
    DatumOsnivanja: Date;
    RedniBroj?: number;
    PosebnaOznakaPredmeta?: string;
    KlasifikacijskaOznaka?: string;
    Naziv: string;
    StrankaID: string;
    RokZaRjesavanje?: Date;
    Napomena?: string;
    ActiveReason?: string;
    GlavniPredmetID?: string;
    VrstaUpravnogPostupkaID: string;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    UNadleznostiID: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const PredmetPredmetLookupKey =
    'EvidencijaPismena/PredmetPredmetLookup';
  export interface PredmetPredmetLookup {
    ID?: string;
    PredmetID?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    GlavniPredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
  }

  export const AllowReadWritePismenoZaposlenikKey =
    'EvidencijaPismena/AllowReadWritePismenoZaposlenik';
  export interface AllowReadWritePismenoZaposlenik {
    PismenoID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    PodsjetnikID?: string;
    ObradaPismenaDijeljenjePredmetaPismenaID?: string;
    ObradaPismenaPravoNaPismenoPrekoObradeOvlastenjaID?: string;
  }

  export const AllowReadWritePismenoZaposlenik_MaterializedKey =
    'EvidencijaPismena/AllowReadWritePismenoZaposlenik_Materialized';
  export interface AllowReadWritePismenoZaposlenik_Materialized {
    ID?: string;
    PismenoID: string;
    ZaposlenikID: string;
  }

  export const PismenoPredmetPovezivanjeEventKey =
    'EvidencijaPismena/PismenoPredmetPovezivanjeEvent';
  export interface PismenoPredmetPovezivanjeEvent {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const PismenoPredmetPonistavanjeVezivanjaEventKey =
    'EvidencijaPismena/PismenoPredmetPonistavanjeVezivanjaEvent';
  export interface PismenoPredmetPonistavanjeVezivanjaEvent {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const ComputePismenoPredmetPovezaniKey =
    'EvidencijaPismena/ComputePismenoPredmetPovezani';
  export interface ComputePismenoPredmetPovezani {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
  }

  export const PismenoPredmetPovezaniPersistedKey =
    'EvidencijaPismena/PismenoPredmetPovezaniPersisted';
  export interface PismenoPredmetPovezaniPersisted {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
  }

  export const PismenaPredmetaIPovezanaPismenaKey =
    'EvidencijaPismena/PismenaPredmetaIPovezanaPismena';
  export interface PismenaPredmetaIPovezanaPismena {
    ID?: string;
    PismenoID?: string;
    PredmetID?: string;
  }

  export const PismenoPredmetPovezivanjeLogKey =
    'EvidencijaPismena/PismenoPredmetPovezivanjeLog';
  export interface PismenoPredmetPovezivanjeLog {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    ZadnjaAkcija?: string;
    DatumZadnjeAkcije?: Date;
  }

  export const PismenoVezanoNaPredmetBrowseKey =
    'EvidencijaPismena/PismenoVezanoNaPredmetBrowse';
  export interface PismenoVezanoNaPredmetBrowse {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    Naziv?: string;
    DatumOsnivanja?: Date;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    UstrojstvenaJedinicaIliZaposlenikNaziv?: string;
    StrankaNazivMjestoNaziv?: string;
  }

  export const PismenoVezanoNaPredmetBrowseFTSSearchKey =
    'EvidencijaPismena/PismenoVezanoNaPredmetBrowseFTSSearch';
  export interface PismenoVezanoNaPredmetBrowseFTSSearch {
    Pattern?: string;
  }

  export const PismenoPrilogKey = 'EvidencijaPismena/PismenoPrilog';
  export interface PismenoPrilog {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrBroj?: string;
    PismenoPrilogNaziv?: string;
    SubjektNaziv?: string;
    SubjektID?: string;
    Active?: boolean;
    Tip?: string;
    Barkod?: string;
  }

  export const PismenoPrilogLookupKey = 'EvidencijaPismena/PismenoPrilogLookup';
  export interface PismenoPrilogLookup {
    ID?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrBroj?: string;
    PismenoPrilogNaziv?: string;
    SubjektID?: string;
    Barkod?: string;
    Active?: boolean;
  }

  export const PismenoPrilogLookupSearchKey =
    'EvidencijaPismena/PismenoPrilogLookupSearch';
  export interface PismenoPrilogLookupSearch {
    Pattern?: string;
  }

  export const PismenoSluzbenaBiljeskaKey =
    'EvidencijaPismena/PismenoSluzbenaBiljeska';
  export interface PismenoSluzbenaBiljeska {
    ID?: string;
    Biljeska: string;
  }

  export const SluzbenaBiljeskaPismenaKey =
    'EvidencijaPismena/SluzbenaBiljeskaPismena';
  export interface SluzbenaBiljeskaPismena {
    ID?: string;
    SluzbenaBiljeskaID: string;
    PismenoID: string;
    KreiraoID?: string;
    Active?: boolean;
  }

  export const UpdatePismenoSluzbenaBiljeskaKey =
    'EvidencijaPismena/UpdatePismenoSluzbenaBiljeska';
  export interface UpdatePismenoSluzbenaBiljeska {
    PismenoID?: string;
    SluzbeneBiljeske?: string;
  }

  export const PlanKlasifikacijskihOznakaKey =
    'EvidencijaPismena/PlanKlasifikacijskihOznaka';
  export interface PlanKlasifikacijskihOznaka {
    ID?: string;
    Naziv: string;
    VrijediOd: Date;
    RucniUnosRednogBroja?: boolean;
  }

  export const NoviPlanKlasifikacijskihOznakaKey =
    'EvidencijaPismena/NoviPlanKlasifikacijskihOznaka';
  export interface NoviPlanKlasifikacijskihOznaka {}

  export const PlanKlasifikacijskihOznakaBrowseKey =
    'EvidencijaPismena/PlanKlasifikacijskihOznakaBrowse';
  export interface PlanKlasifikacijskihOznakaBrowse {
    ID?: string;
    Naziv?: string;
    VrijediOd?: Date;
    RucniUnosRednogBroja?: boolean;
    VrijediDo?: Date;
    StatusID?: string;
    StatusNaziv?: string;
  }

  export const PlanKlasifikacijskihOznakaStatusKey =
    'EvidencijaPismena/PlanKlasifikacijskihOznakaStatus';
  export interface PlanKlasifikacijskihOznakaStatus {
    ID?: string;
    Naziv?: string;
  }

  export const PlanKlasifikacijskihOznakaKalkuliraniPodaciKey =
    'EvidencijaPismena/PlanKlasifikacijskihOznakaKalkuliraniPodaci';
  export interface PlanKlasifikacijskihOznakaKalkuliraniPodaci {
    ID?: string;
    PlanKlasifikacijskihOznakaStatusID?: string;
    VrijediDo?: Date;
  }

  export const UpsertPlanKlasifikacijskihOznakaKey =
    'EvidencijaPismena/UpsertPlanKlasifikacijskihOznaka';
  export interface UpsertPlanKlasifikacijskihOznaka {
    PlanKlasifikacijskihOznaka: string;
    KopirajIzID?: string;
  }

  export const DjelatnostKey = 'EvidencijaPismena/Djelatnost';
  export interface Djelatnost {
    ID?: string;
    PlanKlasifikacijskihOznakaID: string;
    Oznaka: string;
    Naziv: string;
    VrijediOd: Date;
  }

  export const DosjeKey = 'EvidencijaPismena/Dosje';
  export interface Dosje {
    ID?: string;
    DjelatnostID: string;
    Oznaka: string;
    Naziv: string;
    VrijediOd: Date;
  }

  export const DosjeVrstaUpravnogPostupkaBrowseKey =
    'EvidencijaPismena/DosjeVrstaUpravnogPostupkaBrowse';
  export interface DosjeVrstaUpravnogPostupkaBrowse {
    ID?: string;
    Naziv?: string;
    DosjeID?: string;
    VrstaUpravnogPostupkaID?: string;
    VrijediOd?: Date;
    VrstaUpravnogPostupkaNaziv?: string;
  }

  export const DosjeQuickSearchKey = 'EvidencijaPismena/DosjeQuickSearch';
  export interface DosjeQuickSearch {
    Pattern?: string;
    DatumOsnivanja?: Date;
    VrstaUpravnogPostupkaID?: string;
    DosjeID?: string;
  }

  export const DosjeExtendedKey = 'EvidencijaPismena/DosjeExtended';
  export interface DosjeExtended {
    ID?: string;
    OblikKlasifikacijskeOznake?: string;
    Naziv?: string;
    Oznaka?: string;
    DjelatnostID?: string;
    VrijediDo?: Date;
    VrijediOd?: Date;
    VrstaUpravnogPostupkaID?: string;
  }

  export const DosjeLookupKey = 'EvidencijaPismena/DosjeLookup';
  export interface DosjeLookup {
    ID?: string;
    Oznaka?: string;
    Naziv?: string;
    OblikKlasifikacijskeOznake?: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    VrstaUpravnogPostupkaID?: string;
    DjelatnostOznaka?: string;
    DjelatnostNaziv?: string;
    RucniUnosRednogBroja?: boolean;
    FiksniDioKlase?: string;
  }

  export const PodsjetnikKey = 'EvidencijaPismena/Podsjetnik';
  export interface Podsjetnik {
    ID?: string;
    ZaObjektID?: string;
    DatumIsteka: Date;
    Naziv: string;
    ZaKorisnikaID: string;
    KreiraoID?: string;
    Active?: boolean;
  }

  export const PodsjetnikPredmetPismenoKey =
    'EvidencijaPismena/PodsjetnikPredmetPismeno';
  export interface PodsjetnikPredmetPismeno {
    ID?: string;
    PismenoID?: string;
    PredmetID?: string;
  }

  export const PodsjetnikBrowseBaseKey =
    'EvidencijaPismena/PodsjetnikBrowseBase';
  export interface PodsjetnikBrowseBase {
    ID?: string;
    DatumIsteka?: Date;
    VrijemeIsteka?: string;
    Istekao?: boolean;
    Active?: boolean;
    PodsjetnikNaziv?: string;
    KreiraoBrOznakaNazivUJNaziv?: string;
    ZaKorisnikaBrOznakaNazivUJNaziv?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
    ZaObjektID?: string;
    KreiraoID?: string;
    ZaKorisnikaID?: string;
  }

  export const PodsjetnikBrowseKey = 'EvidencijaPismena/PodsjetnikBrowse';
  export interface PodsjetnikBrowse {
    ID?: string;
    DatumIsteka?: Date;
    VrijemeIsteka?: string;
    Istekao?: boolean;
    Active?: boolean;
    PodsjetnikNaziv?: string;
    KreiraoBrOznakaNazivUJNaziv?: string;
    ZaKorisnikaBrOznakaNazivUJNaziv?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
    ZaObjektID?: string;
  }

  export const AktivniKey = 'EvidencijaPismena/Aktivni';
  export interface Aktivni {}

  export const AktivniCountKey = 'EvidencijaPismena/AktivniCount';
  export interface AktivniCount {}

  export const IstekliPodsjetniciKey = 'EvidencijaPismena/IstekliPodsjetnici';
  export interface IstekliPodsjetnici {}

  export const IstekliPodsjetniciTrenutnogKorisnikaKey =
    'EvidencijaPismena/IstekliPodsjetniciTrenutnogKorisnika';
  export interface IstekliPodsjetniciTrenutnogKorisnika {}

  export const PrekoraceniPodsjetnikKey =
    'EvidencijaPismena/PrekoraceniPodsjetnik';
  export interface PrekoraceniPodsjetnik {
    ID?: string;
    DatumIsteka?: Date;
    VrijemeIsteka?: string;
    Prekoraceno?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    Active?: boolean;
    ZaObjektID?: string;
    PodsjetnikNaziv?: string;
    ZaKorisnikaID?: string;
  }

  export const PrekoraceniPodsjetnikBrowseKey =
    'EvidencijaPismena/PrekoraceniPodsjetnikBrowse';
  export interface PrekoraceniPodsjetnikBrowse {
    ID?: string;
    DatumIsteka?: Date;
    VrijemeIsteka?: string;
    Prekoraceno?: string;
    PodsjetnikNaziv?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    Active?: boolean;
    ZaObjektID?: string;
  }

  export const PredmetRucnoUneseniRedniBrojKey =
    'EvidencijaPismena/PredmetRucnoUneseniRedniBroj';
  export interface PredmetRucnoUneseniRedniBroj {
    ID?: string;
    RedniBroj?: number;
    UstrojstvenaJedinicaID?: string;
  }

  export const UstrojstvenaJedinicaNijeOmogucenaZaRucniUnosKlaseKey =
    'EvidencijaPismena/UstrojstvenaJedinicaNijeOmogucenaZaRucniUnosKlase';
  export interface UstrojstvenaJedinicaNijeOmogucenaZaRucniUnosKlase {}

  export const UstrojstvenaJedinicaKlasifikacijskaOznakaRucnoUnesenaKey =
    'EvidencijaPismena/UstrojstvenaJedinicaKlasifikacijskaOznakaRucnoUnesena';
  export interface UstrojstvenaJedinicaKlasifikacijskaOznakaRucnoUnesena {
    ID?: string;
    KlasifikacijskaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const UstrojstvenaJedinicaDatumProdukcijeKey =
    'EvidencijaPismena/UstrojstvenaJedinicaDatumProdukcije';
  export interface UstrojstvenaJedinicaDatumProdukcije {
    ID?: string;
    DatumProdukcije: Date;
  }

  export const PredmetAdditionalDataKey =
    'EvidencijaPismena/PredmetAdditionalData';
  export interface PredmetAdditionalData {
    ID?: string;
    TipPredmetaID?: string;
    StupanjTajnostiID?: string;
  }

  export const PredmetiUObradiKey = 'EvidencijaPismena/PredmetiUObradi';
  export interface PredmetiUObradi {}

  export const DatumNastankaPredmetaUBuducnostiKey =
    'EvidencijaPismena/DatumNastankaPredmetaUBuducnosti';
  export interface DatumNastankaPredmetaUBuducnosti {}

  export const UpsertPredmetKey = 'EvidencijaPismena/UpsertPredmet';
  export interface UpsertPredmet {
    Predmet: string;
    PredmetDodatneStranke?: string;
    PredmetDodatneOznake?: string;
    TipPredmetaID?: string;
    StupanjTajnostiID?: string;
  }

  export const OsnivanjePredmetaKey = 'EvidencijaPismena/OsnivanjePredmeta';
  export interface OsnivanjePredmeta {
    Predmet: string;
    Pismeno: string;
    PredmetDodatneStranke?: string;
    PismenoDodatneOznake?: string;
    PredmetDodatneOznake?: string;
    PismenoPrilozi?: string;
    PismenoSluzbeneBiljeske?: string;
    CustomOsnivanje?: boolean;
    RucnoUneseniRedniBrojPredmeta?: number;
    TipPredmetaID?: string;
    TipPismenaID?: string;
    PismenoStupanjTajnostiID?: string;
    PredmetStupanjTajnostiID?: string;
  }

  export const PredmetOsnivanjeKey = 'EvidencijaPismena/PredmetOsnivanje';
  export interface PredmetOsnivanje {
    ID?: string;
    PredmetID: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    KreiraoID: string;
  }

  export const PredmetDodatnaStrankaKey =
    'EvidencijaPismena/PredmetDodatnaStranka';
  export interface PredmetDodatnaStranka {
    ID?: string;
    StrankaID: string;
    PredmetID: string;
  }

  export const UpdatePredmetDodatnaStrankaKey =
    'EvidencijaPismena/UpdatePredmetDodatnaStranka';
  export interface UpdatePredmetDodatnaStranka {
    PredmetID?: string;
    DodatneStranke?: string;
  }

  export const PredmetExtendedKey = 'EvidencijaPismena/PredmetExtended';
  export interface PredmetExtended {
    ID?: string;
    StrankaNazivMjestoNaziv?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    Povezivanje?: string;
    GlavniPredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNazivUSastavuNazivBrojcanaOznaka?: string;
    SadrziPismena?: boolean;
    SadrziPriloge?: boolean;
    Brisan?: boolean;
    DodatneStrankeSAdresom?: string;
    StatusPredmetaNaziv?: string;
    DatumStatusa?: Date;
    TipPredmetaNaziv?: string;
    Razvodjenje?: string;
    StatusPredmetaID?: string;
    TipPredmetaID?: string;
    UNadleznostiID?: string;
  }

  export const PredmetSmartSearchAutoCompleteKey =
    'EvidencijaPismena/PredmetSmartSearchAutoComplete';
  export interface PredmetSmartSearchAutoComplete {
    ID?: string;
    Barkod?: string;
  }

  export const PredmetBrowseKey = 'EvidencijaPismena/PredmetBrowse';
  export interface PredmetBrowse {
    ID?: string;
    Naziv?: string;
    DatumOsnivanja?: Date;
    GlavniPredmetID?: string;
    Active?: boolean;
    ActiveReason?: string;
    DatumKreiranja?: Date;
    VrstaUpravnogPostupkaID?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    UstrojstvenaJedinicaIliZaposlenikNaziv?: string;
    StrankaNazivMjestoNaziv?: string;
    StatusPredmetaNaziv?: string;
    DatumStatusa?: Date;
    TipPredmetaNaziv?: string;
    Povezivanje?: string;
    Razvodjenje?: string;
    StupanjTajnosti?: string;
  }

  export const PredmetBrowseThisIDsOnlyKey =
    'EvidencijaPismena/PredmetBrowseThisIDsOnly';
  export interface PredmetBrowseThisIDsOnly {
    IDListJson?: string;
  }

  export const PredmetWithRecompileKey =
    'EvidencijaPismena/PredmetWithRecompile';
  export interface PredmetWithRecompile {
    ID?: string;
    Predmet_WithRecompile?: boolean;
  }

  export const PredmetLookupKey = 'EvidencijaPismena/PredmetLookup';
  export interface PredmetLookup {
    ID?: string;
    Active?: boolean;
    Barkod?: string;
    GlavniPredmetID?: string;
    PosebnaOznakaPredmeta?: string;
    KlasifikacijskaOznaka?: string;
    Naziv?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    StrankaNazivMjestoNaziv?: string;
    Predmet_WithRecompile?: boolean;
  }

  export const PredmetQuickSearchWithActiveKey =
    'EvidencijaPismena/PredmetQuickSearchWithActive';
  export interface PredmetQuickSearchWithActive {
    Pattern?: string;
  }

  export const PredmetQuickSearchKey = 'EvidencijaPismena/PredmetQuickSearch';
  export interface PredmetQuickSearch {
    Pattern?: string;
  }

  export const ReferenceNonexistentUNadleznostiKey =
    'EvidencijaPismena/ReferenceNonexistentUNadleznosti';
  export interface ReferenceNonexistentUNadleznosti {}

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupGetByIdsKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupGetByIds';
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupGetByIds {
    IDS?: string;
    PredmetOrPismenoID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupUNadleznostiKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupUNadleznosti';
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupUNadleznosti {
    ID?: string;
    Pattern?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupPredmetDatumOsnivanjaKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupPredmetDatumOsnivanja';
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupPredmetDatumOsnivanja {
    DatumOsnivanja?: Date;
    Pattern?: string;
    ID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_History';
  export interface UstrojstvenaJedinicaIliZaposlenik_History {
    ID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    EntityID?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    USastavuID?: string;
    PotpunaBrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivUSastavuNazivBrojcanaOznaka?: string;
    BrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    BrOznakaNazivUstrojstvenaJedinicaNazivUSastavuNaziv?: string;
    Active?: boolean;
    IsZaposlenik?: boolean;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookup';
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookup {
    ID?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    PotpunaBrojcanaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    EntityID?: string;
    Active?: boolean;
    IsZaposlenik?: boolean;
    BrojcanaOznaka?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryGetByPredmetIdKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryGetByPredmetId';
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryGetByPredmetId {
    ID?: string;
  }

  export const PredmetDodatnaOznakaKey =
    'EvidencijaPismena/PredmetDodatnaOznaka';
  export interface PredmetDodatnaOznaka {
    ID?: string;
    OznakaID: string;
    PredmetID: string;
  }

  export const UpdatePredmetDodatnaOznakaKey =
    'EvidencijaPismena/UpdatePredmetDodatnaOznaka';
  export interface UpdatePredmetDodatnaOznaka {
    PredmetID?: string;
    DodatneOznake?: string;
  }

  export const PredmetDmsDokumentKey = 'EvidencijaPismena/PredmetDmsDokument';
  export interface PredmetDmsDokument {
    ID?: string;
    PredmetID?: string;
    DokumentID?: string;
  }

  export const PredmetNadleznostExtendedKey =
    'EvidencijaPismena/PredmetNadleznostExtended';
  export interface PredmetNadleznostExtended {
    ID?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
  }

  export const PredmetStatusExtendedKey =
    'EvidencijaPismena/PredmetStatusExtended';
  export interface PredmetStatusExtended {
    ID?: string;
    StatusPredmetaNaziv?: string;
    StatusPredmetaSifra?: number;
    DatumStatusa?: Date;
    KatalogTijekaPostupanjaID?: string;
    StatusPredmetaID?: string;
    TipPredmetaID?: string;
  }

  export const PredmetStatusComputedKey =
    'EvidencijaPismena/PredmetStatusComputed';
  export interface PredmetStatusComputed {
    ID?: string;
    StatusPredmetaID?: string;
    KatalogTijekaPostupanjaID?: string;
    DatumStatusa?: Date;
    StatusPredmetaSifra?: number;
    TipPredmetaID?: string;
    Razvodjenje?: string;
    NivoStupnjaTajnosti?: number;
    PrefiksKlaseStupnjaTajnosti?: string;
    StupanjTajnostiID?: string;
  }

  export const PredmetStatusPersistedKey =
    'EvidencijaPismena/PredmetStatusPersisted';
  export interface PredmetStatusPersisted {
    ID?: string;
    DatumStatusa?: Date;
    Razvodjenje?: string;
    PrefiksKlaseStupnjaTajnosti?: string;
    StatusPredmetaSifra?: number;
    NivoStupnjaTajnosti?: number;
    StatusPredmetaID?: string;
    KatalogTijekaPostupanjaID?: string;
    TipPredmetaID?: string;
    StupanjTajnostiID?: string;
  }

  export const PredmetiUObradiTotalCountKey =
    'EvidencijaPismena/PredmetiUObradiTotalCount';
  export interface PredmetiUObradiTotalCount {
    ID?: string;
    TotalCount?: number;
  }

  export const GetKey = 'EvidencijaPismena/Get';
  export interface Get {}

  export const PredmetBrisanjeKey = 'EvidencijaPismena/PredmetBrisanje';
  export interface PredmetBrisanje {
    ID?: string;
    PredmetID: string;
    DatumKreiranja?: Date;
    JePonistavanjeBrisanja: boolean;
    ActiveReason?: string;
    KreiraoID: string;
  }

  export const ValidForPredmetDeleteKey =
    'EvidencijaPismena/ValidForPredmetDelete';
  export interface ValidForPredmetDelete {}

  export const BrisanjePredmetaKey = 'EvidencijaPismena/BrisanjePredmeta';
  export interface BrisanjePredmeta {
    PredmetID: string;
    IsActive: boolean;
    ActiveReason?: string;
  }

  export const ComputePredmetFTSKljucneRijeciKey =
    'EvidencijaPismena/ComputePredmetFTSKljucneRijeci';
  export interface ComputePredmetFTSKljucneRijeci {
    ID?: string;
    KljucneRijeci?: string;
    PredmetNaziv?: string;
  }

  export const PredmetFTSKey = 'EvidencijaPismena/PredmetFTS';
  export interface PredmetFTS {
    ID?: string;
    KljucneRijeci?: string;
    PredmetNaziv?: string;
    CTXPredmetID?: string;
    Razvodjenje?: string;
  }

  export const PredmetBrowseFTSSearchKey =
    'EvidencijaPismena/PredmetBrowseFTSSearch';
  export interface PredmetBrowseFTSSearch {
    Pattern?: string;
  }

  export const PredmetExtensionsDefinitionKey =
    'EvidencijaPismena/PredmetExtensionsDefinition';
  export interface PredmetExtensionsDefinition {
    ID?: string;
    Field?: string;
    FieldValue?: string;
    ControllerName: string;
    ViewModelType: string;
  }

  export const PodatakZaGeneriranjeKlasifikacijskeOznakePredmetaKey =
    'EvidencijaPismena/PodatakZaGeneriranjeKlasifikacijskeOznakePredmeta';
  export interface PodatakZaGeneriranjeKlasifikacijskeOznakePredmeta {
    ID?: string;
    PredmetID?: string;
    DosjeID?: string;
    PosebnaOznakaPredmeta?: string;
    VrstaUpravnosti?: string;
    DosjeOznaka?: string;
    DjelatnostOznaka?: string;
    GodinaOtvaranjaPredmeta?: number;
    GodinaOtvaranjaPredmetaKratka?: string;
    RedniBroj?: number;
    RedniBrojFormatiran?: string;
  }

  export const ParametriGeneriranjaKlasifikacijskeOznakeKey =
    'EvidencijaPismena/ParametriGeneriranjaKlasifikacijskeOznake';
  export interface ParametriGeneriranjaKlasifikacijskeOznake {
    ID?: string;
    DodavnjeNulaDoBrojaZnamenki: number;
  }

  export const ComputePredmetKlasifikatorKey =
    'EvidencijaPismena/ComputePredmetKlasifikator';
  export interface ComputePredmetKlasifikator {
    ID?: string;
    DosjeOznaka?: string;
    DjelatnostOznaka?: string;
    VrstaUpravnosti?: string;
    Godina?: number;
    MaxRbrUnutarGodineIDosjea?: number;
  }

  export const PredmetKlasifikatorKey = 'EvidencijaPismena/PredmetKlasifikator';
  export interface PredmetKlasifikator {
    ID?: string;
    DosjeOznaka?: string;
    DjelatnostOznaka?: string;
    VrstaUpravnosti?: string;
    Godina?: number;
    MaxRbrUnutarGodineIDosjea?: number;
  }

  export const PredmetRedniBrojResultKey =
    'EvidencijaPismena/PredmetRedniBrojResult';
  export interface PredmetRedniBrojResult {
    MaxRbrUnutarGodineIDosjea?: number;
    DodavnjeNulaDoBrojaZnamenki?: number;
  }

  export const PredmetInicialnoStanjeKey =
    'EvidencijaPismena/PredmetInicialnoStanje';
  export interface PredmetInicialnoStanje {
    ID?: string;
    DatumOsnivanja?: Date;
    DosjeID?: string;
    Naziv?: string;
    UNadleznostiID?: string;
  }

  export const SavePredmetiInicialnoStanjeKey =
    'EvidencijaPismena/SavePredmetiInicialnoStanje';
  export interface SavePredmetiInicialnoStanje {
    PredmetIDs?: string;
  }

  export const PredmetPismenoBrowseKey =
    'EvidencijaPismena/PredmetPismenoBrowse';
  export interface PredmetPismenoBrowse {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
  }

  export const PredmetPismenoComputedKey =
    'EvidencijaPismena/PredmetPismenoComputed';
  export interface PredmetPismenoComputed {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
  }

  export const GetByPredmetPismenoIDsKey =
    'EvidencijaPismena/GetByPredmetPismenoIDs';
  export interface GetByPredmetPismenoIDs {
    PredmetPismenoListJson?: string;
  }

  export const AllowPredmetPermissionsKey =
    'EvidencijaPismena/AllowPredmetPermissions';
  export interface AllowPredmetPermissions {
    PredmetID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    EksplicitnaPravaRadaPredmetomAddID?: string;
    VezaniPredmetiSEksplicitnimPravimaID?: string;
    PredmetPravoPristupaRadomUpravljaID?: string;
    PredmetiOvlasteniSluzbeniciUJOvlasteniSluzbeniciNadlezneUJID?: string;
    PredmetiPravoUvidaSluzbeniciUJOvlasteniSluzbeniciNadlezneUJID?: string;
    KorisniciSPravimaNadZapisimaNekogDjelatnikaKorisniciSPravimaNadZapisimaNekogDjelatnikaID?: string;
    KorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaKorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaID?: string;
    PredmetUNadleznostiZaposlenikaID?: string;
    PodsjetnikPravoPrekoPodsjetnikaID?: string;
  }

  export const DenyPredmetPermissionsKey =
    'EvidencijaPismena/DenyPredmetPermissions';
  export interface DenyPredmetPermissions {
    PredmetID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    DenyPredmetPermissionsPovjerljiviUrudzbeniPovjerljiviUrudzbeniID?: string;
  }

  export const PredmetPermissionsKey = 'EvidencijaPismena/PredmetPermissions';
  export interface PredmetPermissions {
    ID?: string;
    PredmetID?: string;
    ZaposlenikID?: string;
  }

  export const EksplicitnaPravaRadaPredmetomKey =
    'EvidencijaPismena/EksplicitnaPravaRadaPredmetom';
  export interface EksplicitnaPravaRadaPredmetom {
    PredmetID?: string;
    DatumOd?: Date;
    DodaoPravaID?: string;
    SluzbenikID?: string;
    Subtype?: string;
  }

  export const ComputeEksplicitnaPravaRadaPredmetomAddKey =
    'EvidencijaPismena/ComputeEksplicitnaPravaRadaPredmetomAdd';
  export interface ComputeEksplicitnaPravaRadaPredmetomAdd {
    ID?: string;
    PredmetID?: string;
    ZaposlenikID?: string;
  }

  export const EksplicitnaPravaRadaPredmetomAddKey =
    'EvidencijaPismena/EksplicitnaPravaRadaPredmetomAdd';
  export interface EksplicitnaPravaRadaPredmetomAdd {
    ID?: string;
    PredmetID: string;
    ZaposlenikID: string;
  }

  export const VezaniPredmetiSEksplicitnimPravimaKey =
    'EvidencijaPismena/VezaniPredmetiSEksplicitnimPravima';
  export interface VezaniPredmetiSEksplicitnimPravima {
    ID?: string;
    PredmetID?: string;
    SluzbenikID?: string;
    DatumOd?: Date;
  }

  export const PredmetPravoPristupaKey =
    'EvidencijaPismena/PredmetPravoPristupa';
  export interface PredmetPravoPristupa {
    ID?: string;
    GlavniPredmetID?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    UNadleznostiID?: string;
  }

  export const PredmetiOvlasteniSluzbeniciUJKey =
    'EvidencijaPismena/PredmetiOvlasteniSluzbeniciUJ';
  export interface PredmetiOvlasteniSluzbeniciUJ {
    ID?: string;
  }

  export const PredmetiPravoUvidaSluzbeniciUJKey =
    'EvidencijaPismena/PredmetiPravoUvidaSluzbeniciUJ';
  export interface PredmetiPravoUvidaSluzbeniciUJ {
    ID?: string;
  }

  export const KorisniciSPravimaNadZapisimaNekogDjelatnikaKey =
    'EvidencijaPismena/KorisniciSPravimaNadZapisimaNekogDjelatnika';
  export interface KorisniciSPravimaNadZapisimaNekogDjelatnika {
    ID?: string;
  }

  export const KorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaKey =
    'EvidencijaPismena/KorisniciSPravimaUvidaNadZapisimaNekogDjelatnika';
  export interface KorisniciSPravimaUvidaNadZapisimaNekogDjelatnika {
    ID?: string;
  }

  export const AllowReadPredmetZaposlenikKey =
    'EvidencijaPismena/AllowReadPredmetZaposlenik';
  export interface AllowReadPredmetZaposlenik {
    PredmetID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    AllowReadWritePredmetZaposlenik_MaterializedID?: string;
    UstrojstvoPravoRadaZaposlenikaPoPredmetimaID?: string;
  }

  export const AllowReadPredmetZaposlenik_MaterializedKey =
    'EvidencijaPismena/AllowReadPredmetZaposlenik_Materialized';
  export interface AllowReadPredmetZaposlenik_Materialized {
    ID?: string;
    PredmetID: string;
    ZaposlenikID: string;
  }

  export const AllowReadWritePredmetZaposlenikKey =
    'EvidencijaPismena/AllowReadWritePredmetZaposlenik';
  export interface AllowReadWritePredmetZaposlenik {
    PredmetID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    PodsjetnikID?: string;
    EksplicitnaPravaRadaPredmetomAddID?: string;
    UstrojstvoPravoRadaZaposlenikaPoPredmetimaID?: string;
  }

  export const AllowReadWritePredmetZaposlenik_MaterializedKey =
    'EvidencijaPismena/AllowReadWritePredmetZaposlenik_Materialized';
  export interface AllowReadWritePredmetZaposlenik_Materialized {
    ID?: string;
    PredmetID: string;
    ZaposlenikID: string;
  }

  export const AllowReadZaposlenikUstrojstvenaJedinicaKey =
    'EvidencijaPismena/AllowReadZaposlenikUstrojstvenaJedinica';
  export interface AllowReadZaposlenikUstrojstvenaJedinica {
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    Subtype?: string;
    AllowReadWriteZaposlenikUstrojstvenaJedinica_MaterializedID?: string;
    UstrojstvoSluzbenikUstrojstveneJediniceSPravomUvidaID?: string;
  }

  export const AllowReadZaposlenikUstrojstvenaJedinica_MaterializedKey =
    'EvidencijaPismena/AllowReadZaposlenikUstrojstvenaJedinica_Materialized';
  export interface AllowReadZaposlenikUstrojstvenaJedinica_Materialized {
    ID?: string;
    ZaposlenikID: string;
    UstrojstvenaJedinicaID: string;
  }

  export const AllowReadWriteZaposlenikUstrojstvenaJedinicaKey =
    'EvidencijaPismena/AllowReadWriteZaposlenikUstrojstvenaJedinica';
  export interface AllowReadWriteZaposlenikUstrojstvenaJedinica {
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    Subtype?: string;
    UstrojstvoUstrojstvenaJedinicaOvlasteniSluzbenikID?: string;
  }

  export const AllowReadWriteZaposlenikUstrojstvenaJedinica_MaterializedKey =
    'EvidencijaPismena/AllowReadWriteZaposlenikUstrojstvenaJedinica_Materialized';
  export interface AllowReadWriteZaposlenikUstrojstvenaJedinica_Materialized {
    ID?: string;
    ZaposlenikID: string;
    UstrojstvenaJedinicaID: string;
  }

  export const PredmetPromijeniTipKey = 'EvidencijaPismena/PredmetPromijeniTip';
  export interface PredmetPromijeniTip {
    ID?: string;
    PredmetID: string;
    DatumKreiranja?: Date;
    TipPredmetaID: string;
    KorisnikID?: string;
  }

  export const PredmetPromijeniTipBrowseKey =
    'EvidencijaPismena/PredmetPromijeniTipBrowse';
  export interface PredmetPromijeniTipBrowse {
    ID?: string;
    PredmetID?: string;
    TipPredmetaID?: string;
    DatumKreiranja?: Date;
    Active?: boolean;
  }

  export const PredmetUpozorenjeKey = 'EvidencijaPismena/PredmetUpozorenje';
  export interface PredmetUpozorenje {
    ID?: string;
    KlasifikacijskaOznaka?: string;
    Naziv?: string;
    DatumOsnivanja?: Date;
    DatumIzmjeneUstrojstva?: Date;
    PredmetID?: string;
    Nadleznost?: string;
    Opis?: string;
    TipUpozorenja?: number;
    UNadleznostiID?: string;
  }

  export const PredmetUpozorenjeSearchKey =
    'EvidencijaPismena/PredmetUpozorenjeSearch';
  export interface PredmetUpozorenjeSearch {
    KlasifikacijskaOznaka?: string;
    Naziv?: string;
    Pattern?: string;
    Nadleznost?: string;
    Opis?: string;
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
    DatumIzmjeneUstrojstvaOd?: Date;
    DatumIzmjeneUstrojstvaDo?: Date;
    IDs?: string;
  }

  export const PredmetUpozorenjeIgnoriranoKey =
    'EvidencijaPismena/PredmetUpozorenjeIgnorirano';
  export interface PredmetUpozorenjeIgnorirano {
    ID?: string;
    PredmetID?: string;
    DatumIzmjeneUstrojstva?: Date;
    TipUpozorenja?: number;
    DatumPotvrde?: Date;
    TemeljemGlavnogPredmeta?: boolean;
    PotvrdioID?: string;
    UNadleznostiID?: string;
  }

  export const UpsertPredmetUpozorenjeIgnoriranoKey =
    'EvidencijaPismena/UpsertPredmetUpozorenjeIgnorirano';
  export interface UpsertPredmetUpozorenjeIgnorirano {
    PredmetID?: string;
    UNadleznostiID?: string;
    DatumIzmjeneUstrojstva?: Date;
    TipUpozorenja?: number;
  }

  export const PredmetUpravnogPostupkaIIStupnjaKey =
    'EvidencijaPismena/PredmetUpravnogPostupkaIIStupnja';
  export interface PredmetUpravnogPostupkaIIStupnja {
    ID?: string;
    StvarnaNadleznost?: string;
    MjesnaNadleznost?: string;
    TijeloKojeJeDonijeloIliNijeDonijeloPrvostupanjskoRijesenja?: string;
    DatumOdlukeOZalbi?: Date;
    URoku?: boolean;
    PostupakObustavljen?: Date;
    Revizija?: Date;
    KlasifikacijskaOznakaPredmetaUpravnogPostupkaIStupnjaPoKojemJePodnesenaZalba?: string;
    ZalbaPoDrugostupanjskomTijeluID?: string;
  }

  export const UpdateRazlogUsvajanjeZalbePoDrugostupanjskomTijeluKey =
    'EvidencijaPismena/UpdateRazlogUsvajanjeZalbePoDrugostupanjskomTijelu';
  export interface UpdateRazlogUsvajanjeZalbePoDrugostupanjskomTijelu {
    PredmetID?: string;
    Razlozi?: string;
  }

  export const PredmetRazlogUsvajanjeZalbePoDrugostupanjskomTijeluKey =
    'EvidencijaPismena/PredmetRazlogUsvajanjeZalbePoDrugostupanjskomTijelu';
  export interface PredmetRazlogUsvajanjeZalbePoDrugostupanjskomTijelu {
    ID?: string;
    PredmetID: string;
    RazlogID: string;
  }

  export const ZalbaPoDrugostupanjskomTijeluKey =
    'EvidencijaPismena/ZalbaPoDrugostupanjskomTijelu';
  export interface ZalbaPoDrugostupanjskomTijelu {
    ID?: string;
    Oznaka: string;
    Naziv: string;
    ImaRazloge: boolean;
  }

  export const RazlogUsvajanjeZalbePoDrugostupanjskomTijeluKey =
    'EvidencijaPismena/RazlogUsvajanjeZalbePoDrugostupanjskomTijelu';
  export interface RazlogUsvajanjeZalbePoDrugostupanjskomTijelu {
    ID?: string;
    Oznaka: string;
    Naziv: string;
  }

  export const PredmetUpravnogPostupkaIStupnjaKey =
    'EvidencijaPismena/PredmetUpravnogPostupkaIStupnja';
  export interface PredmetUpravnogPostupkaIStupnja {
    ID?: string;
    StvarnaNadleznost?: string;
    MjesnaNadleznost?: string;
    DatumOdlukeOZahtjevu?: Date;
    URoku?: boolean;
    DatumOdlukeOZalbi?: Date;
    PostupakObustavljen?: Date;
    ZalbaPoPrvostupanjskomTijeluID?: string;
    OdlukaOZahtjevuID?: string;
  }

  export const ZalbaPoPrvostupanjskomTijeluKey =
    'EvidencijaPismena/ZalbaPoPrvostupanjskomTijelu';
  export interface ZalbaPoPrvostupanjskomTijelu {
    ID?: string;
    Oznaka: string;
    Naziv: string;
  }

  export const OdlukaOZahtjevuKey = 'EvidencijaPismena/OdlukaOZahtjevu';
  export interface OdlukaOZahtjevu {
    ID?: string;
    Oznaka: string;
    Naziv: string;
  }

  export const ComputePredmetPismenoPrilogFTSKey =
    'EvidencijaPismena/ComputePredmetPismenoPrilogFTS';
  export interface ComputePredmetPismenoPrilogFTS {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    GlavniPredmetID?: string;
    TipDokumenta?: string;
    Naziv?: string;
    KljucneRijeciOsnovno?: string;
    PredmetKljucneRijeciOstalo?: string;
    PismenoKljucneRijeciOstalo?: string;
    PrilogKljucneRijeciOstalo?: string;
    PrilogID?: string;
    UstrojstvenaJedinicaID?: string;
    UNadleznostiID?: string;
  }

  export const PredmetPismenoPrilogFTSKey =
    'EvidencijaPismena/PredmetPismenoPrilogFTS';
  export interface PredmetPismenoPrilogFTS {
    ID?: string;
    TipDokumenta?: string;
    Naziv?: string;
    KljucneRijeciOsnovno?: string;
    PredmetKljucneRijeciOstalo?: string;
    PismenoKljucneRijeciOstalo?: string;
    PrilogKljucneRijeciOstalo?: string;
    GlavniPredmetID?: string;
    UstrojstvenaJedinicaID?: string;
    UNadleznostiID?: string;
    PredmetID?: string;
    PismenoID?: string;
    PrilogID?: string;
    CTXPismenoID?: string;
    CTXPredmetID?: string;
    CTXPrilogID?: string;
  }

  export const PredmetPismenoPrilogPreparedKey =
    'EvidencijaPismena/PredmetPismenoPrilogPrepared';
  export interface PredmetPismenoPrilogPrepared {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    TipDokumenta?: string;
    PredmetOznakaUpravnosti?: string;
    PredmetKlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    PredmetUNadleznosti?: string;
    PredmetNadleznaJedinicaBrojcanaOznaka?: string;
    PredmetStranka?: string;
    PredmetDatumOsnivanja?: Date;
    PredmetRokZaRjesavanje?: Date;
    PredmetDosjeNaziv?: string;
    PredmetDjelatnostNaziv?: string;
    PredmetLokacijaNaziv?: string;
    PredmetBarkod?: string;
    PredmetDodatneStranke?: string;
    PismenoJePodnesak?: boolean;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    PismenoPosiljateljPodnositeljIliStvaratelj?: string;
    PismenoDatumNastankaAktaUliPrimitkaPismena?: Date;
    PismenoKlasifikacijskiBrojPosiljatelja?: string;
    PismenoUrudzbeniBrojPosiljatelja?: string;
    Active?: boolean;
    PismenoVrijednost?: string;
    PismenoSluzbenaBiljeska?: string;
    PismenoNaKojeJePrilozenaOmotnica?: string;
    PismenoDatumNastanka?: Date;
    PismenoBarkod?: string;
    PismenoBrojPriloga?: number;
    PismenoDodatnaOznaka?: string;
    NazivPriloga?: string;
    Stvaratelj?: string;
    DatumNastankaPriloga?: Date;
    VrstaPriloga?: string;
    PrilogBiljeska?: string;
    Naziv?: string;
    Stranka?: string;
    DatumStvaranja?: Date;
    GlavniPredmetID?: string;
    PrilogID?: string;
    UstrojstvenaJedinicaID?: string;
    UNadleznostiID?: string;
  }

  export const FTSUpitiZaIgnoriratiKey =
    'EvidencijaPismena/FTSUpitiZaIgnorirati';
  export interface FTSUpitiZaIgnorirati {
    ID?: string;
    Pattern?: string;
  }

  export const PredmetPismenoPrilogKey =
    'EvidencijaPismena/PredmetPismenoPrilog';
  export interface PredmetPismenoPrilog {
    ID?: string;
    TipDokumenta?: string;
    PredmetID?: string;
    PredmetOznakaUpravnosti?: string;
    PredmetKlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    PredmetUNadleznosti?: string;
    PredmetNadleznaJedinicaBrojcanaOznaka?: string;
    PredmetStranka?: string;
    PredmetDatumOsnivanja?: Date;
    PredmetRokZaRjesavanje?: Date;
    PredmetDosjeNaziv?: string;
    PredmetDjelatnostNaziv?: string;
    PredmetLokacijaNaziv?: string;
    PredmetBarkod?: string;
    PredmetDodatneStranke?: string;
    PismenoID?: string;
    PrilogID?: string;
    PismenoJePodnesak?: boolean;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    PismenoPosiljateljPodnositeljIliStvaratelj?: string;
    PismenoDatumNastankaAktaUliPrimitkaPismena?: Date;
    PismenoKlasifikacijskiBrojPosiljatelja?: string;
    PismenoUrudzbeniBrojPosiljatelja?: string;
    Active?: boolean;
    PismenoVrijednost?: string;
    PismenoSluzbenaBiljeska?: string;
    PismenoNaKojeJePrilozenaOmotnica?: string;
    PismenoDatumNastanka?: Date;
    PismenoBarkod?: string;
    PismenoBrojPriloga?: number;
    PismenoDodatnaOznaka?: string;
    NazivPriloga?: string;
    Stvaratelj?: string;
    DatumNastankaPriloga?: Date;
    VrstaPriloga?: string;
    PrilogBiljeska?: string;
    Naziv?: string;
    Stranka?: string;
    DatumStvaranja?: Date;
    UstrojstvenaJedinicaID?: string;
    GlavniPredmetID?: string;
    UNadleznostiID?: string;
  }

  export const PredmetPismenoPrilogSmartSearchAutoCompleteKey =
    'EvidencijaPismena/PredmetPismenoPrilogSmartSearchAutoComplete';
  export interface PredmetPismenoPrilogSmartSearchAutoComplete {
    ID?: string;
    Barkod?: string;
  }

  export const PredmetPismenoPrilogSearchKey =
    'EvidencijaPismena/PredmetPismenoPrilogSearch';
  export interface PredmetPismenoPrilogSearch {
    Pattern?: string;
    DatumOd?: Date;
    DatumDo?: Date;
    TipDatuma?: string;
    TipDokumenta?: string;
  }

  export const PrilogKey = 'EvidencijaPismena/Prilog';
  export interface Prilog {
    ID?: string;
    PredmetID: string;
    PismenoID?: string;
    DatumNastanka: Date;
    Naziv: string;
    Biljeska?: string;
    Barkod?: string;
    VrstaPrilogaID: string;
    StvarateljID?: string;
    Active?: boolean;
  }

  export const DocumentTemplatePrilogDsKey =
    'EvidencijaPismena/DocumentTemplatePrilogDs';
  export interface DocumentTemplatePrilogDs {
    ID?: string;
    PredmetKlasa?: string;
    PredmetNaziv?: string;
    PredmetPocetak?: string;
    PredmetPocetakTekst?: string;
    PredmetRokZaRjesavanje?: string;
    PredmetRokZaRjesavanjeTekst?: string;
    PredmetBarkod?: string;
    PredmetUstrojstvenaJedinicaNaziv?: string;
    PredmetReferent?: string;
    PredmetLokacijaNaziv?: string;
    PredmetLokacijaAdresa?: string;
    PrilogBarkod?: string;
    PrilogNaziv?: string;
    PrilogDatumNastanka?: string;
    PrilogDatumNastankaTekst?: string;
    PrilogBiljeska?: string;
    PrilogVrstaPrilogaNaziv?: string;
    StrankaNaziv?: string;
    StrankaUlicaIKucniBroj?: string;
    StrankaPostanskiBroj?: string;
    StrankaMjestoNaziv?: string;
    StrankaDrzavaSluzbeniNaziv?: string;
    StrankaOib?: string;
    StrankaMbg?: string;
    StrankaMbs?: string;
    StrankaMb?: string;
    PismenoBarkod?: string;
    PismenoNaziv?: string;
    PismenoUrudzbeniBroj?: string;
    PismenoDatumNastanka?: string;
    PismenoDatumNastankaTekst?: string;
    MigriraniBarkodPrilog?: string;
    PredmetSignatura?: string;
    PredmetZaduzenje?: string;
  }

  export const GetByPismenoIDsKey = 'EvidencijaPismena/GetByPismenoIDs';
  export interface GetByPismenoIDs {
    PismenoIDs?: string;
  }

  export const GetPismenoPriloziKey = 'EvidencijaPismena/GetPismenoPrilozi';
  export interface GetPismenoPrilozi {}

  export const GetPredmetPriloziKey = 'EvidencijaPismena/GetPredmetPrilozi';
  export interface GetPredmetPrilozi {}

  export const PrilogAdditionalDataKey =
    'EvidencijaPismena/PrilogAdditionalData';
  export interface PrilogAdditionalData {
    ID?: string;
    StupanjTajnostiID?: string;
  }

  export const PrilogUnosKey = 'EvidencijaPismena/PrilogUnos';
  export interface PrilogUnos {
    ID?: string;
    PrilogID: string;
    DatumVrijeme?: Date;
    KorisnikID?: string;
  }

  export const PrilogExtendedKey = 'EvidencijaPismena/PrilogExtended';
  export interface PrilogExtended {
    ID?: string;
    PismenoUrudzbeniBroj?: string;
  }

  export const PriloziPismenaIPovezaniPriloziKey =
    'EvidencijaPismena/PriloziPismenaIPovezaniPrilozi';
  export interface PriloziPismenaIPovezaniPrilozi {
    ID?: string;
    PismenoID?: string;
    PrilogID?: string;
  }

  export const PriloziPredmetiIPovezaniPriloziKey =
    'EvidencijaPismena/PriloziPredmetiIPovezaniPrilozi';
  export interface PriloziPredmetiIPovezaniPrilozi {
    ID?: string;
    PredmetID?: string;
    PrilogID?: string;
  }

  export const PrilogBrowseKey = 'EvidencijaPismena/PrilogBrowse';
  export interface PrilogBrowse {
    ID?: string;
    DatumNastanka?: Date;
    Naziv?: string;
    PredmetID?: string;
    PismenoID?: string;
    Barkod?: string;
    Active?: boolean;
    VrstaPrilogaNaziv?: string;
    PredmetKlasifikacijskaOznaka?: string;
    PismenoUrudzbeniBroj?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    StupanjTajnosti?: string;
  }

  export const PrilogBrowseThisIDsOnlyKey =
    'EvidencijaPismena/PrilogBrowseThisIDsOnly';
  export interface PrilogBrowseThisIDsOnly {
    IDListJson?: string;
  }

  export const PrilogBrowseIPovezaniKey =
    'EvidencijaPismena/PrilogBrowseIPovezani';
  export interface PrilogBrowseIPovezani {
    PismenoID?: string;
  }

  export const PrilogPredmetBrowseIPovezaniKey =
    'EvidencijaPismena/PrilogPredmetBrowseIPovezani';
  export interface PrilogPredmetBrowseIPovezani {
    PredmetID?: string;
  }

  export const DeletePrilogKey = 'EvidencijaPismena/DeletePrilog';
  export interface DeletePrilog {
    PrilogID: string;
  }

  export const PrilogBarkodKey = 'EvidencijaPismena/PrilogBarkod';
  export interface PrilogBarkod {
    ID?: string;
    Barkod?: string;
    PismenoBarkod?: string;
    PredmetBarkod?: string;
  }

  export const PrilogLookupKey = 'EvidencijaPismena/PrilogLookup';
  export interface PrilogLookup {
    ID?: string;
    Active?: boolean;
    Biljeska?: string;
    Barkod?: string;
    Naziv?: string;
    PredmetKlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
  }

  export const UpsertPrilogKey = 'EvidencijaPismena/UpsertPrilog';
  export interface UpsertPrilog {
    Prilog: string;
    StupanjTajnostiID?: string;
  }

  export const BrisanjeAktiviranjePrilogaKey =
    'EvidencijaPismena/BrisanjeAktiviranjePriloga';
  export interface BrisanjeAktiviranjePriloga {
    PrilogID?: string;
    IsActive?: boolean;
  }

  export const PismenoPrilogBrowseKey = 'EvidencijaPismena/PismenoPrilogBrowse';
  export interface PismenoPrilogBrowse {
    ID?: string;
    PrilogID?: string;
    PismenoID?: string;
    Barkod?: string;
    PrilogNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
  }

  export const PismenoPrilogComputedKey =
    'EvidencijaPismena/PismenoPrilogComputed';
  export interface PismenoPrilogComputed {
    ID?: string;
    PrilogID?: string;
    PismenoID?: string;
    Barkod?: string;
    PrilogNaziv?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
  }

  export const GetByPismenoPrilogIDsKey =
    'EvidencijaPismena/GetByPismenoPrilogIDs';
  export interface GetByPismenoPrilogIDs {
    PismenoPrilogListJson?: string;
  }

  export const PrilogPismenoPovezivanjeEventKey =
    'EvidencijaPismena/PrilogPismenoPovezivanjeEvent';
  export interface PrilogPismenoPovezivanjeEvent {
    ID?: string;
    PismenoID?: string;
    PrilogID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const PrilogPismenoPonistavanjePovezivanjaEventKey =
    'EvidencijaPismena/PrilogPismenoPonistavanjePovezivanjaEvent';
  export interface PrilogPismenoPonistavanjePovezivanjaEvent {
    ID?: string;
    PismenoID?: string;
    PrilogID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const ComputePrilogPismenoPovezaniKey =
    'EvidencijaPismena/ComputePrilogPismenoPovezani';
  export interface ComputePrilogPismenoPovezani {
    ID?: string;
    PrilogID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
  }

  export const PrilogPismenoPovezaniPersistedKey =
    'EvidencijaPismena/PrilogPismenoPovezaniPersisted';
  export interface PrilogPismenoPovezaniPersisted {
    ID?: string;
    PrilogID?: string;
    PismenoID?: string;
  }

  export const PrilogPismenoPovezivanjeLogKey =
    'EvidencijaPismena/PrilogPismenoPovezivanjeLog';
  export interface PrilogPismenoPovezivanjeLog {
    ID?: string;
    PrilogID?: string;
    PismenoID?: string;
    ZadnjaAkcija?: string;
    DatumZadnjeAkcije?: Date;
  }

  export const PrilogVezanNaPismenoBrowseKey =
    'EvidencijaPismena/PrilogVezanNaPismenoBrowse';
  export interface PrilogVezanNaPismenoBrowse {
    ID?: string;
    PismenoID?: string;
    PrilogID?: string;
    Naziv?: string;
    DatumKreiranja?: Date;
    Barkod?: string;
    UrudzbeniBroj?: string;
    NazivPriloga?: string;
  }

  export const PrilogVezanNaPismenoBrowseFTSSearchKey =
    'EvidencijaPismena/PrilogVezanNaPismenoBrowseFTSSearch';
  export interface PrilogVezanNaPismenoBrowseFTSSearch {
    Pattern?: string;
  }

  export const PrilogPredmetBrowseKey = 'EvidencijaPismena/PrilogPredmetBrowse';
  export interface PrilogPredmetBrowse {
    ID?: string;
    PrilogID?: string;
    PredmetID?: string;
    Barkod?: string;
    PredmetNaziv?: string;
    KlasifikacijskaOznaka?: string;
    PrilogNaziv?: string;
  }

  export const PredmetPrilogComputedKey =
    'EvidencijaPismena/PredmetPrilogComputed';
  export interface PredmetPrilogComputed {
    ID?: string;
    PrilogID?: string;
    PredmetID?: string;
    Barkod?: string;
    PredmetNaziv?: string;
    KlasifikacijskaOznaka?: string;
    PrilogNaziv?: string;
  }

  export const GetByPredmetPrilogIDsKey =
    'EvidencijaPismena/GetByPredmetPrilogIDs';
  export interface GetByPredmetPrilogIDs {
    PredmetPrilogListJson?: string;
  }

  export const PrilogPredmetPovezivanjeEventKey =
    'EvidencijaPismena/PrilogPredmetPovezivanjeEvent';
  export interface PrilogPredmetPovezivanjeEvent {
    ID?: string;
    PredmetID?: string;
    PrilogID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const PrilogPredmetPonistavanjePovezivanjaEventKey =
    'EvidencijaPismena/PrilogPredmetPonistavanjePovezivanjaEvent';
  export interface PrilogPredmetPonistavanjePovezivanjaEvent {
    ID?: string;
    PredmetID?: string;
    PrilogID?: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const ComputePrilogPredmetPovezaniKey =
    'EvidencijaPismena/ComputePrilogPredmetPovezani';
  export interface ComputePrilogPredmetPovezani {
    ID?: string;
    PrilogID?: string;
    PredmetID?: string;
    DatumKreiranja?: Date;
  }

  export const PrilogPredmetPovezaniPersistedKey =
    'EvidencijaPismena/PrilogPredmetPovezaniPersisted';
  export interface PrilogPredmetPovezaniPersisted {
    ID?: string;
    PrilogID?: string;
    PredmetID?: string;
  }

  export const PrilogPredmetPovezivanjeLogKey =
    'EvidencijaPismena/PrilogPredmetPovezivanjeLog';
  export interface PrilogPredmetPovezivanjeLog {
    ID?: string;
    PrilogID?: string;
    PredmetID?: string;
    ZadnjaAkcija?: string;
    DatumZadnjeAkcije?: Date;
  }

  export const PrilogVezanNaPredmetBrowseKey =
    'EvidencijaPismena/PrilogVezanNaPredmetBrowse';
  export interface PrilogVezanNaPredmetBrowse {
    ID?: string;
    PredmetID?: string;
    PrilogID?: string;
    Naziv?: string;
    DatumOsnivanja?: Date;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    UstrojstvenaJedinicaIliZaposlenikNaziv?: string;
    StrankaNazivMjestoNaziv?: string;
  }

  export const PrilogVezanNaPredmetBrowseFTSSearchKey =
    'EvidencijaPismena/PrilogVezanNaPredmetBrowseFTSSearch';
  export interface PrilogVezanNaPredmetBrowseFTSSearch {
    Pattern?: string;
  }

  export const PromjenaNadleznostiPredmetKey =
    'EvidencijaPismena/PromjenaNadleznostiPredmet';
  export interface PromjenaNadleznostiPredmet {
    DatumVrijeme?: Date;
    PredmetID?: string;
    KorisnikID: string;
    UNadleznostiID: string;
    Subtype?: string;
    RasporedjivanjeID?: string;
    VezivanjeKaoPromjenaNadleznosti_MaterializedID?: string;
    DostavaURadDodjelaURadID?: string;
    DostavaURadUstupanjePredmetaID?: string;
  }

  export const PromjenaNadleznostiPredmetCombinedKey =
    'EvidencijaPismena/PromjenaNadleznostiPredmetCombined';
  export interface PromjenaNadleznostiPredmetCombined {
    ID?: string;
    ActiveSince?: Date;
    KorisnikPrezimeIme?: string;
    PredmetID?: string;
    KorisnikID?: string;
    UstrojstvenaJedinicaID?: string;
    UNadleznostiID?: string;
  }

  export const RasporedjivanjeKey = 'EvidencijaPismena/Rasporedjivanje';
  export interface Rasporedjivanje {
    ID?: string;
    PredmetID: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    TemeljemPismena?: boolean;
    TemeljemGlavnogPredmeta?: boolean;
    KreiraoID: string;
    RasporedjenoNaID: string;
  }

  export const ValidForRasporedjivanjeKey =
    'EvidencijaPismena/ValidForRasporedjivanje';
  export interface ValidForRasporedjivanje {}

  export const PredmetRasporedjivanjeKey =
    'EvidencijaPismena/PredmetRasporedjivanje';
  export interface PredmetRasporedjivanje {
    Predmeti: string;
    UstrojstvenaJedinicaIliZaposlenikID: string;
  }

  export const UpsertPismenoRasporedjivanjeKey =
    'EvidencijaPismena/UpsertPismenoRasporedjivanje';
  export interface UpsertPismenoRasporedjivanje {
    Pismena: string;
    UstrojstvenaJedinicaIliZaposlenikID: string;
  }

  export const KatalogTijekaPostupanjaKey =
    'EvidencijaPismena/KatalogTijekaPostupanja';
  export interface KatalogTijekaPostupanja {
    ID?: string;
    Sifra?: number;
    Tekst: string;
    Opis?: string;
    StatusPredmetaID?: string;
  }

  export const VrstaPrilogaKey = 'EvidencijaPismena/VrstaPriloga';
  export interface VrstaPriloga {
    ID?: string;
    Naziv: string;
    CtxId?: number;
    Active?: boolean;
  }

  export const VrstaPrilogaLookupKey = 'EvidencijaPismena/VrstaPrilogaLookup';
  export interface VrstaPrilogaLookup {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const VrstaPrilogaBrowseKey = 'EvidencijaPismena/VrstaPrilogaBrowse';
  export interface VrstaPrilogaBrowse {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const VrstaUpravnogPostupkaKey =
    'EvidencijaPismena/VrstaUpravnogPostupka';
  export interface VrstaUpravnogPostupka {
    ID?: string;
    Oznaka?: string;
    Naziv: string;
    DmsFolderName: string;
  }

  export const StanjePredmetaPrijeDogadjajaKey =
    'EvidencijaPismena/StanjePredmetaPrijeDogadjaja';
  export interface StanjePredmetaPrijeDogadjaja {
    ID?: string;
    PrethodniStatusPredmetID?: string;
    PrethodniTppID?: string;
    PrethodniTppSaStatusomID?: string;
  }

  export const PismenoTrenutniStatusKey =
    'EvidencijaPismena/PismenoTrenutniStatus';
  export interface PismenoTrenutniStatus {
    ID?: string;
    StatusPismenaID?: string;
    ZadnjiTppID?: string;
  }

  export const ComputePismenoStatusKey =
    'EvidencijaPismena/ComputePismenoStatus';
  export interface ComputePismenoStatus {
    ID?: string;
    PredmetID?: string;
    StatusPismenaID?: string;
    StupanjTajnostiID?: string;
    NivoStupnjaTajnosti?: number;
    StatusPredmetaID?: string;
  }

  export const PismenoStatusPersistedKey =
    'EvidencijaPismena/PismenoStatusPersisted';
  export interface PismenoStatusPersisted {
    ID?: string;
    NivoStupnjaTajnosti?: number;
    PredmetID?: string;
    StatusPismenaID?: string;
    StupanjTajnostiID?: string;
    StatusPredmetaID?: string;
  }

  export const PrilogTrenutniStatusPismenaKey =
    'EvidencijaPismena/PrilogTrenutniStatusPismena';
  export interface PrilogTrenutniStatusPismena {
    ID?: string;
    StatusPismenaID?: string;
    ZadnjiTppID?: string;
  }

  export const PromjeniStatusPismenaKey =
    'EvidencijaPismena/PromjeniStatusPismena';
  export interface PromjeniStatusPismena {
    ID?: string;
    DatumVrijeme?: Date;
    PismenoID: string;
    Napomena?: string;
    StatusPismenaID: string;
    KorisnikID?: string;
  }

  export const DozvoljeniPrijelaziStatusaNotExistsKey =
    'EvidencijaPismena/DozvoljeniPrijelaziStatusaNotExists';
  export interface DozvoljeniPrijelaziStatusaNotExists {}

  export const TrenutniKorisnikNemaGrupuZaStatusPismenaKey =
    'EvidencijaPismena/TrenutniKorisnikNemaGrupuZaStatusPismena';
  export interface TrenutniKorisnikNemaGrupuZaStatusPismena {}

  export const StatusPredmetaValidForPismenoEditKey =
    'EvidencijaPismena/StatusPredmetaValidForPismenoEdit';
  export interface StatusPredmetaValidForPismenoEdit {}

  export const TrenutniKorisnikNemaGrupuZaStatusPismenaInvalidItemsKey =
    'EvidencijaPismena/TrenutniKorisnikNemaGrupuZaStatusPismenaInvalidItems';
  export interface TrenutniKorisnikNemaGrupuZaStatusPismenaInvalidItems {
    ID?: string;
  }

  export const StatusPismenaKey = 'EvidencijaPismena/StatusPismena';
  export interface StatusPismena {
    ID?: string;
    Naziv: string;
    Active?: boolean;
    CanSelectForPromjeniStatusPismena?: boolean;
    IsUserEditable?: boolean;
    ValidForPismenoDelete?: boolean;
    ValidForPismenoUndoDelete?: boolean;
    ValidForPismenoEdit?: boolean;
    ValidForPromijeniTipPismena?: boolean;
    ValidForPrilogInsert?: boolean;
    ValidForPrilogEdit?: boolean;
    ValidForPrilogDelete?: boolean;
    ValidForDownload?: boolean;
    ValidForCheckout?: boolean;
    ValidForNewDocumentVersion?: boolean;
    ValidForPostaviStatusNaCheckoutanoPismeno?: boolean;
    ValidForZahtjevZaPotvrdomPrimitkaDostavaURad?: boolean;
    ValidForObradaPismenaInsert?: boolean;
    ValidForRezultatObradaPismena?: boolean;
    ValidForOtpremanje?: boolean;
    ValidForDostavaObavljena?: boolean;
    ValidForKreirajUputuOtpreme?: boolean;
  }

  export const ActiveOnlyKey = 'EvidencijaPismena/ActiveOnly';
  export interface ActiveOnly {}

  export const ValidForPromjeniStatusPismenaFilterKey =
    'EvidencijaPismena/ValidForPromjeniStatusPismenaFilter';
  export interface ValidForPromjeniStatusPismenaFilter {}

  export const CanSelectForPromjeniStatusPismenaFilterKey =
    'EvidencijaPismena/CanSelectForPromjeniStatusPismenaFilter';
  export interface CanSelectForPromjeniStatusPismenaFilter {
    PismenoID?: string;
  }

  export const OnlySatatusiNotInStatusPismenaDozvoljeniPrijelaziFilterKey =
    'EvidencijaPismena/OnlySatatusiNotInStatusPismenaDozvoljeniPrijelaziFilter';
  export interface OnlySatatusiNotInStatusPismenaDozvoljeniPrijelaziFilter {
    PrethodniStatusID?: string;
  }

  export const StatusPismenaKorisnickaGrupaZaposlenikKey =
    'EvidencijaPismena/StatusPismenaKorisnickaGrupaZaposlenik';
  export interface StatusPismenaKorisnickaGrupaZaposlenik {
    ID?: string;
    ZaposlenikID?: string;
    HasKorisnickaGrupa?: boolean;
    IsValid?: boolean;
  }

  export const StatusPismenaBrowseBaseKey =
    'EvidencijaPismena/StatusPismenaBrowseBase';
  export interface StatusPismenaBrowseBase {
    ID?: string;
    Naziv?: string;
    IsUserEditable?: boolean;
    CanSelectForPromjeniStatusPismena?: boolean;
    Active?: boolean;
    SljedeciDozvoljeniStatusi?: string;
    KorisnickeGrupe?: string;
  }

  export const StatusPismenaBrowseKey = 'EvidencijaPismena/StatusPismenaBrowse';
  export interface StatusPismenaBrowse {
    ID?: string;
    Naziv?: string;
    IsUserEditable?: boolean;
    CanSelectForPromjeniStatusPismena?: boolean;
    Active?: boolean;
    SljedeciDozvoljeniStatusi?: string;
    KorisnickeGrupe?: string;
  }

  export const StatusPismenaDozvoljeniPrijelaziKey =
    'EvidencijaPismena/StatusPismenaDozvoljeniPrijelazi';
  export interface StatusPismenaDozvoljeniPrijelazi {
    ID?: string;
    PrethodniStatusID: string;
    SljedeciStatusID: string;
  }

  export const StatusPismenaDozvoljeniPrijelaziBrowseBaseKey =
    'EvidencijaPismena/StatusPismenaDozvoljeniPrijelaziBrowseBase';
  export interface StatusPismenaDozvoljeniPrijelaziBrowseBase {
    ID?: string;
    PrethodniStatusID?: string;
    SljedeciStatusID?: string;
    PrethodniStatusNaziv?: string;
    SljedeciStatusNaziv?: string;
    SljedeciStatusIsUserEditable?: boolean;
    SljedeciStatusSljedeciDozvoljeniStatusi?: string;
    SljedeciStatusKorisnickeGrupe?: string;
    SljedeciStatusCanSelectForPromjeniStatusPismena?: boolean;
    SljedeciStatusActive?: boolean;
  }

  export const StatusPismenaDozvoljeniPrijelaziBrowseKey =
    'EvidencijaPismena/StatusPismenaDozvoljeniPrijelaziBrowse';
  export interface StatusPismenaDozvoljeniPrijelaziBrowse {
    ID?: string;
    PrethodniStatusID?: string;
    PrethodniStatusNaziv?: string;
    SljedeciStatusID?: string;
    SljedeciStatusNaziv?: string;
    SljedeciStatusIsUserEditable?: boolean;
    SljedeciStatusSljedeciDozvoljeniStatusi?: string;
    SljedeciStatusKorisnickeGrupe?: string;
    SljedeciStatusCanSelectForPromjeniStatusPismena?: boolean;
    SljedeciStatusActive?: boolean;
  }

  export const StatusPismenaKorisnickaGrupaKey =
    'EvidencijaPismena/StatusPismenaKorisnickaGrupa';
  export interface StatusPismenaKorisnickaGrupa {
    ID?: string;
    StatusPismenaID: string;
    KorisnickaGrupaID: string;
  }

  export const StatusPismenaKorisnickaGrupaBrowseKey =
    'EvidencijaPismena/StatusPismenaKorisnickaGrupaBrowse';
  export interface StatusPismenaKorisnickaGrupaBrowse {
    ID?: string;
    StatusPismenaID?: string;
    KorisnickaGrupaNaziv?: string;
  }

  export const StatusPismenaPrijeDogadjajaKey =
    'EvidencijaPismena/StatusPismenaPrijeDogadjaja';
  export interface StatusPismenaPrijeDogadjaja {
    ID?: string;
    PrethodniStatusPismenoID?: string;
    PrethodniTppID?: string;
    PrethodniTppSaStatusomID?: string;
  }

  export const StatusPismenaZaDogadajKey =
    'EvidencijaPismena/StatusPismenaZaDogadaj';
  export interface StatusPismenaZaDogadaj {
    ID?: string;
    PismenoID?: string;
    Status?: string;
    Primjedba?: string;
    Datum?: Date;
    KorisnikID?: string;
  }

  export const StatusPredmetaKey = 'EvidencijaPismena/StatusPredmeta';
  export interface StatusPredmeta {
    ID?: string;
    Naziv: string;
    Sifra?: number;
    Active?: boolean;
    IsUserEditable?: boolean;
    CanSelectForPromjeniStatusPredmeta?: boolean;
    ValidForRasporedjivanje?: boolean;
    ValidForVezivanje?: boolean;
    ValidForVezivanjeGlavniPredmet?: boolean;
    ValidForPonistavanjeVezivanjaGlavniPredmet?: boolean;
    ValidForPredmetEdit?: boolean;
    ValidForPredmetDelete?: boolean;
    ValidForPismenoInsert?: boolean;
    ValidForPismenoEdit?: boolean;
    ValidForPismenoDelete?: boolean;
    ValidForPismenoUndoDelete?: boolean;
    ValidForPrilogInsert?: boolean;
    ValidForPrilogEdit?: boolean;
    ValidForPrilogDelete?: boolean;
    InvalidForCheckout?: boolean;
    InvalidForNewDocumentVersion?: boolean;
    ValidForDodjelaURad?: boolean;
    ValidForDostavaDrugomTijelu?: boolean;
    ValidForUstupanje?: boolean;
    ValidForZahtjevZaPotvrdomPrimitkaDostavaURad?: boolean;
    ValidForOdlaganjeUAdActa?: boolean;
    ValidForOdlaganjeURokovnik?: boolean;
    ValidForVracanjeURadIzRokovnika?: boolean;
    ValidForVracanjeURadIzAdActa?: boolean;
    ValidForDijeljenjePismenaPredmeta?: boolean;
    ValidForPonistavanjeDijeljenjaPismenaPredmeta?: boolean;
    ValidForObradaPismenaInsert?: boolean;
    ValidForRezultatObradaPismena?: boolean;
    ValidForKreirajUputuOtpreme?: boolean;
  }

  export const OnlySatatusiNotInDozvoljeniPrijelaziStatusaFilterKey =
    'EvidencijaPismena/OnlySatatusiNotInDozvoljeniPrijelaziStatusaFilter';
  export interface OnlySatatusiNotInDozvoljeniPrijelaziStatusaFilter {
    PrethodniStatusID?: string;
  }

  export const CanSelectForPromjeniStatusPredmetaFilterKey =
    'EvidencijaPismena/CanSelectForPromjeniStatusPredmetaFilter';
  export interface CanSelectForPromjeniStatusPredmetaFilter {
    PredmetID?: string;
  }

  export const ValidForPromjeniStatusPredmetaFilterKey =
    'EvidencijaPismena/ValidForPromjeniStatusPredmetaFilter';
  export interface ValidForPromjeniStatusPredmetaFilter {}

  export const StatusPredmetaBrowseBaseKey =
    'EvidencijaPismena/StatusPredmetaBrowseBase';
  export interface StatusPredmetaBrowseBase {
    ID?: string;
    Naziv?: string;
    IsUserEditable?: boolean;
    CanSelectForPromjeniStatusPredmeta?: boolean;
    Active?: boolean;
    SljedeciDozvoljeniStatusi?: string;
    TipoviPredmeta?: string;
    KorisnickeGrupe?: string;
  }

  export const StatusPredmetaBrowseKey =
    'EvidencijaPismena/StatusPredmetaBrowse';
  export interface StatusPredmetaBrowse {
    ID?: string;
    Naziv?: string;
    IsUserEditable?: boolean;
    CanSelectForPromjeniStatusPredmeta?: boolean;
    Active?: boolean;
    SljedeciDozvoljeniStatusi?: string;
    TipoviPredmeta?: string;
    KorisnickeGrupe?: string;
  }

  export const KorisnickaGrupaStatusPredmetaZaposlenikKey =
    'EvidencijaPismena/KorisnickaGrupaStatusPredmetaZaposlenik';
  export interface KorisnickaGrupaStatusPredmetaZaposlenik {
    ID?: string;
    ZaposlenikID?: string;
    HasKorisnickaGrupa?: boolean;
    IsValid?: boolean;
  }

  export const UpsertStatusPredmetaKey =
    'EvidencijaPismena/UpsertStatusPredmeta';
  export interface UpsertStatusPredmeta {
    InsertStatusPredmeta?: boolean;
    StatusPredmetaJson?: string;
    GrupaIDsJson?: string;
  }

  export const StatusPredmetaTipPredmetaKey =
    'EvidencijaPismena/StatusPredmetaTipPredmeta';
  export interface StatusPredmetaTipPredmeta {
    ID?: string;
    StatusPredmetaID: string;
    TipPredmetaID: string;
  }

  export const StatusPredmetaTipPredmetaBrowseKey =
    'EvidencijaPismena/StatusPredmetaTipPredmetaBrowse';
  export interface StatusPredmetaTipPredmetaBrowse {
    ID?: string;
    StatusPredmetaID?: string;
    TipPredmetaNaziv?: string;
  }

  export const DozvoljeniPrijelaziStatusaKey =
    'EvidencijaPismena/DozvoljeniPrijelaziStatusa';
  export interface DozvoljeniPrijelaziStatusa {
    ID?: string;
    PrethodniStatusID: string;
    SljedeciStatusID: string;
  }

  export const DozvoljeniPrijelaziStatusaBrowseBaseKey =
    'EvidencijaPismena/DozvoljeniPrijelaziStatusaBrowseBase';
  export interface DozvoljeniPrijelaziStatusaBrowseBase {
    ID?: string;
    PrethodniStatusID?: string;
    SljedeciStatusID?: string;
    PrethodniStatusNaziv?: string;
    SljedeciStatusNaziv?: string;
    SljedeciStatusIsUserEditable?: boolean;
    SljedeciStatusSljedeciDozvoljeniStatusi?: string;
    SljedeciStatusKorisnickeGrupe?: string;
    SljedeciStatusCanSelectForPromjeniStatusPredmeta?: boolean;
    SljedeciStatusActive?: boolean;
  }

  export const DozvoljeniPrijelaziStatusaBrowseKey =
    'EvidencijaPismena/DozvoljeniPrijelaziStatusaBrowse';
  export interface DozvoljeniPrijelaziStatusaBrowse {
    ID?: string;
    PrethodniStatusID?: string;
    PrethodniStatusNaziv?: string;
    SljedeciStatusID?: string;
    SljedeciStatusNaziv?: string;
    SljedeciStatusIsUserEditable?: boolean;
    SljedeciStatusSljedeciDozvoljeniStatusi?: string;
    SljedeciStatusKorisnickeGrupe?: string;
    SljedeciStatusCanSelectForPromjeniStatusPredmeta?: boolean;
    SljedeciStatusActive?: boolean;
  }

  export const KorisnickaGrupaStatusPredmetaKey =
    'EvidencijaPismena/KorisnickaGrupaStatusPredmeta';
  export interface KorisnickaGrupaStatusPredmeta {
    ID?: string;
    StatusPredmetaID: string;
    KorisnickaGrupaID: string;
  }

  export const KorisnickaGrupaStatusPredmetaBrowseKey =
    'EvidencijaPismena/KorisnickaGrupaStatusPredmetaBrowse';
  export interface KorisnickaGrupaStatusPredmetaBrowse {
    ID?: string;
    StatusPredmetaID?: string;
    KorisnickaGrupaNaziv?: string;
  }

  export const PromjeniStatusPredmetaKey =
    'EvidencijaPismena/PromjeniStatusPredmeta';
  export interface PromjeniStatusPredmeta {
    ID?: string;
    DatumVrijeme?: Date;
    PredmetID: string;
    StatusPredmetaID: string;
    Napomena?: string;
    KorisnikID?: string;
  }

  export const TrenutniKorisnikNemaGrupuZaStatusKey =
    'EvidencijaPismena/TrenutniKorisnikNemaGrupuZaStatus';
  export interface TrenutniKorisnikNemaGrupuZaStatus {}

  export const TrenutniKorisnikNemaGrupuZaStatusInvalidItemsKey =
    'EvidencijaPismena/TrenutniKorisnikNemaGrupuZaStatusInvalidItems';
  export interface TrenutniKorisnikNemaGrupuZaStatusInvalidItems {
    ID?: string;
  }

  export const StatusPredmetaGrupaKey = 'EvidencijaPismena/StatusPredmetaGrupa';
  export interface StatusPredmetaGrupa {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const StatusPredmetaGrupaStatusPredmetaKey =
    'EvidencijaPismena/StatusPredmetaGrupaStatusPredmeta';
  export interface StatusPredmetaGrupaStatusPredmeta {
    ID?: string;
    StatusID?: string;
    GrupaID?: string;
  }

  export const SetStatusPredmetaGrupaKey =
    'EvidencijaPismena/SetStatusPredmetaGrupa';
  export interface SetStatusPredmetaGrupa {
    StatusPredmetaID?: string;
    GrupaIDsJson?: string;
  }

  export const TijekPostupanjaPredmetKey =
    'EvidencijaPismena/TijekPostupanjaPredmet';
  export interface TijekPostupanjaPredmet {
    Opis?: string;
    DatumVrijeme?: Date;
    PredmetID?: string;
    KatalogTijekaPostupanjaID?: string;
    StatusPredmetaID?: string;
    KorisnikID?: string;
    Subtype?: string;
    PismenoID?: string;
    PredmetOsnivanjeID?: string;
    PredmetBrisanjeID?: string;
    PredmetPromijeniTipID?: string;
    RasporedjivanjeID?: string;
    PromjeniStatusPredmetaID?: string;
    VezivanjeID?: string;
    DostavaURadDodjelaURadID?: string;
    DostavaURadDostavaDrugomTijeluID?: string;
    DostavaURadUstupanjePredmetaID?: string;
    ObradaPismenaDijeljenjePredmetaPismenaID?: string;
    ObradaPismenaOdlaganjeUAdActaID?: string;
    ObradaPismenaOdlaganjeURokovnikID?: string;
    ObradaPismenaVracanjeURadIzAdActaID?: string;
    ObradaPismenaVracanjeURadIzRokovnikaID?: string;
    PovjerljiviUrudzbeniPredmetPromjenaStupnjaTajnostiID?: string;
    PismenoPredmetPovezivanjeEventVezaniPredmetID?: string;
    PismenoPredmetPovezivanjeEventGlavniPredmetID?: string;
    PismenoPredmetPonistavanjeVezivanjaEventVezaniPredmetID?: string;
    PismenoPredmetPonistavanjeVezivanjaEventGlavniPredmetID?: string;
    VezivanjeGlavniPredmetID?: string;
    ObradaPismenaDijeljenjePredmetaPismenaBrisanjeSuradnikaID?: string;
  }

  export const TijekPostupanjaPredmet_MaterializedKey =
    'EvidencijaPismena/TijekPostupanjaPredmet_Materialized';
  export interface TijekPostupanjaPredmet_Materialized {
    ID?: string;
    PredmetID?: string;
    KatalogTijekaPostupanjaID?: string;
    DatumVrijeme?: Date;
    StatusPredmetaID?: string;
  }

  export const TijekPostupanjaPredmetStatusKey =
    'EvidencijaPismena/TijekPostupanjaPredmetStatus';
  export interface TijekPostupanjaPredmetStatus {
    ID?: string;
    StatusPredmetaID?: string;
  }

  export const TijekPostupanjaPredmetCombinedKey =
    'EvidencijaPismena/TijekPostupanjaPredmetCombined';
  export interface TijekPostupanjaPredmetCombined {
    ID?: string;
    Opis?: string;
    DatumVrijeme?: Date;
    PredmetID?: string;
    KatalogTijekaPostupanjaID?: string;
    KorisnikPrezimeIme?: string;
    KorisnikID?: string;
  }

  export const TijekPostupanjaPredmetBrowseKey =
    'EvidencijaPismena/TijekPostupanjaPredmetBrowse';
  export interface TijekPostupanjaPredmetBrowse {
    ID?: string;
    Opis?: string;
    DatumVrijeme?: Date;
    PredmetID?: string;
    KatalogTijekaPostupanjaID?: string;
    KorisnikPrezimeIme?: string;
    KorisnikID?: string;
  }

  export const TijekPostupanjaPismenoKey =
    'EvidencijaPismena/TijekPostupanjaPismeno';
  export interface TijekPostupanjaPismeno {
    Opis?: string;
    DatumVrijeme?: Date;
    PismenoID?: string;
    KatalogTijekaPostupanjaID: string;
    StatusPismenaID?: string;
    KorisnikID: string;
    Subtype?: string;
    PismenaPromijeniTipID?: string;
    PismenoBrisanjeID?: string;
    PismenoPredmetPovezivanjeEventID?: string;
    PismenoPredmetPonistavanjeVezivanjaEventID?: string;
    RasporedjivanjeID?: string;
    PromjeniStatusPismenaID?: string;
    VezivanjeID?: string;
    LightDMSDocumentVersionID?: string;
    CmisDmsDocumentVersionInfoID?: string;
    DostavaURadPotvrdaPrimitkaID?: string;
    DostavaURadVracanjeUPisarnicuID?: string;
    ObradaPismenaDijeljenjePredmetaPismenaID?: string;
    ObradaPismenaPismenoObradaID?: string;
    ObradaPismenaPismenoObradaBrisanjeID?: string;
    ObradaPismenaRezultatObradePismenaID?: string;
    PovjerljiviUrudzbeniPismenoPromjenaStupnjaTajnostiID?: string;
    PismenoKreiranoPismenoID?: string;
    ObradaPismenaDijeljenjePredmetaPismenaBrisanjeSuradnikaID?: string;
    Otprema2DostavaObavljenaTPP_MaterializedDostavaObavljenaTPPID?: string;
    Otprema2PonistavanjeDostaveTPP_MaterializedPonistavanjeDostaveTPPID?: string;
    Otprema2PosiljkaPonistenoZakljucivanjeTPP_MaterializedPosiljkaPonistenoZakljucivanjeTPPID?: string;
    Otprema2PosiljkaZakljucivanjeTPP_MaterializedPosiljkaZakljucivanjeTPPID?: string;
    Otprema2UputaZaOtpremuBrisanjeTPP_MaterializedUputaZaOtpremuBrisanjeTPPID?: string;
    Otprema2UputaZaOtpremuSadrzajInsertTPP_MaterializedComputeUputaZaOtpremuSadrzajInsertTPPID?: string;
    Otprema2UputaZaOtpremuPonistiBrisanjeTPP_MaterializedUputaZaOtpremuPonistiBrisanjeTPPID?: string;
    Otprema2UputaZaOtpremuSadrzajUpisTPP_MaterializedUputaZaOtpremuSadrzajUpisTPPID?: string;
  }

  export const TijekPostupanjaPismenoBrowseKey =
    'EvidencijaPismena/TijekPostupanjaPismenoBrowse';
  export interface TijekPostupanjaPismenoBrowse {
    ID?: string;
    Opis?: string;
    DatumVrijeme?: Date;
    PismenoID?: string;
    KatalogTijekaPostupanjaID?: string;
    KorisnikID?: string;
    KorisnikPrezimeIme?: string;
  }

  export const ZadnjiTijekPostupanjaKey =
    'EvidencijaPismena/ZadnjiTijekPostupanja';
  export interface ZadnjiTijekPostupanja {
    ID?: string;
    TijekPostupanjaPredmetID?: string;
  }

  export const TipPismenaKey = 'EvidencijaPismena/TipPismena';
  export interface TipPismena {
    ID?: string;
    Naziv: string;
    CtxId?: number;
    IsPrigovor?: boolean;
    IsZahtjevZaPotvrdu?: boolean;
    Active?: boolean;
  }

  export const TipPismenaLoopupKey = 'EvidencijaPismena/TipPismenaLoopup';
  export interface TipPismenaLoopup {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
    IsPrigovor?: boolean;
    IsZahtjevZaPotvrdu?: boolean;
    IsPredefiniraniTip?: boolean;
    UstrojstveneJedinice?: string;
    KlasifikacijskeOznake?: string;
    TipoviPredmeta?: string;
  }

  export const TipPismenaLoopupFilterKey =
    'EvidencijaPismena/TipPismenaLoopupFilter';
  export interface TipPismenaLoopupFilter {
    DosjeID?: string;
    VrstaUpravnogPostupkaID?: string;
    UstrojstvenaJedinicaID?: string;
    TipPredmetaID?: string;
  }

  export const TipPismenaLoopupPredmetFilterKey =
    'EvidencijaPismena/TipPismenaLoopupPredmetFilter';
  export interface TipPismenaLoopupPredmetFilter {
    PredmetID?: string;
  }

  export const TipPismenaBrowseKey = 'EvidencijaPismena/TipPismenaBrowse';
  export interface TipPismenaBrowse {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
    KlasifikacijskeOznake?: string;
    UstrojstveneJedinice?: string;
    TipoviPredmeta?: string;
    IsPredefiniraniTip?: boolean;
  }

  export const TipPismenaExtendedKey = 'EvidencijaPismena/TipPismenaExtended';
  export interface TipPismenaExtended {
    ID?: string;
    UstrojstveneJedinice?: string;
    KlasifikacijskeOznake?: string;
    TipoviPredmeta?: string;
    IsPredefiniraniTip?: boolean;
  }

  export const PredefiniraniTipPismenaKey =
    'EvidencijaPismena/PredefiniraniTipPismena';
  export interface PredefiniraniTipPismena {
    ID?: string;
    ActionDate?: Date;
    TipPismenaID: string;
    ExecutedByID?: string;
  }

  export const PredefiniraniTipPismenaHasFiltersKey =
    'EvidencijaPismena/PredefiniraniTipPismenaHasFilters';
  export interface PredefiniraniTipPismenaHasFilters {}

  export const TipPismenaKlasifikacijskeOznakeKey =
    'EvidencijaPismena/TipPismenaKlasifikacijskeOznake';
  export interface TipPismenaKlasifikacijskeOznake {
    ID?: string;
    FiksniDioKlaseID?: string;
    TipPismenaID: string;
  }

  export const TipPismenaKlasifikacijskeOznakeExtendedKey =
    'EvidencijaPismena/TipPismenaKlasifikacijskeOznakeExtended';
  export interface TipPismenaKlasifikacijskeOznakeExtended {
    ID?: string;
    FiksniDioKlase?: string;
  }

  export const TipPismenaKlasifikacijskeOznakeBrowseKey =
    'EvidencijaPismena/TipPismenaKlasifikacijskeOznakeBrowse';
  export interface TipPismenaKlasifikacijskeOznakeBrowse {
    ID?: string;
    TipPismenaID?: string;
    FiksniDioKlase?: string;
  }

  export const TipPismenaUstrojstveneJediniceKey =
    'EvidencijaPismena/TipPismenaUstrojstveneJedinice';
  export interface TipPismenaUstrojstveneJedinice {
    ID?: string;
    TipPismenaID: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const TipPismenaUstrojstveneJediniceExtendedKey =
    'EvidencijaPismena/TipPismenaUstrojstveneJediniceExtended';
  export interface TipPismenaUstrojstveneJediniceExtended {
    ID?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
  }

  export const TipPismenaUstrojstveneJediniceBrowseKey =
    'EvidencijaPismena/TipPismenaUstrojstveneJediniceBrowse';
  export interface TipPismenaUstrojstveneJediniceBrowse {
    ID?: string;
    TipPismenaID?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
  }

  export const TipPismenaTipoviPredmetaKey =
    'EvidencijaPismena/TipPismenaTipoviPredmeta';
  export interface TipPismenaTipoviPredmeta {
    ID?: string;
    TipPismenaID: string;
    TipPredmetaID?: string;
  }

  export const TipPismenaTipoviPredmetaExtendedKey =
    'EvidencijaPismena/TipPismenaTipoviPredmetaExtended';
  export interface TipPismenaTipoviPredmetaExtended {
    ID?: string;
    TipPredmetaNaziv?: string;
  }

  export const TipPismenaTipoviPredmetaBrowseKey =
    'EvidencijaPismena/TipPismenaTipoviPredmetaBrowse';
  export interface TipPismenaTipoviPredmetaBrowse {
    ID?: string;
    TipPismenaID?: string;
    Naziv?: string;
  }

  export const TipPredmetaKey = 'EvidencijaPismena/TipPredmeta';
  export interface TipPredmeta {
    ID?: string;
    Naziv: string;
    CtxId?: number;
    Active?: boolean;
  }

  export const TipPredmetaLoopupKey = 'EvidencijaPismena/TipPredmetaLoopup';
  export interface TipPredmetaLoopup {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
    IsPredefiniraniTip?: boolean;
    UstrojstveneJedinice?: string;
    KlasifikacijskeOznake?: string;
  }

  export const NedodijeljeniTipoviPredmetaKey =
    'EvidencijaPismena/NedodijeljeniTipoviPredmeta';
  export interface NedodijeljeniTipoviPredmeta {
    StatusPredmetaID?: string;
  }

  export const TipPredmetaLoopupFilterKey =
    'EvidencijaPismena/TipPredmetaLoopupFilter';
  export interface TipPredmetaLoopupFilter {
    VrstaUpravnogPostupkaID?: string;
    DosjeID?: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const TipPredmetaBrowseKey = 'EvidencijaPismena/TipPredmetaBrowse';
  export interface TipPredmetaBrowse {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
    KlasifikacijskeOznake?: string;
    UstrojstveneJedinice?: string;
    IsPredefiniraniTip?: boolean;
  }

  export const TipPredmetaExtendedKey = 'EvidencijaPismena/TipPredmetaExtended';
  export interface TipPredmetaExtended {
    ID?: string;
    KlasifikacijskeOznake?: string;
    UstrojstveneJedinice?: string;
    IsPredefiniraniTip?: boolean;
  }

  export const PredefiniraniTipPredmetaKey =
    'EvidencijaPismena/PredefiniraniTipPredmeta';
  export interface PredefiniraniTipPredmeta {
    ID?: string;
    ActionDate?: Date;
    TipPredmetaID: string;
    ExecutedByID?: string;
  }

  export const PredefiniraniTipPredmetaHasFiltersKey =
    'EvidencijaPismena/PredefiniraniTipPredmetaHasFilters';
  export interface PredefiniraniTipPredmetaHasFilters {}

  export const TipPredmetaKlasifikacijskeOznakeKey =
    'EvidencijaPismena/TipPredmetaKlasifikacijskeOznake';
  export interface TipPredmetaKlasifikacijskeOznake {
    ID?: string;
    FiksniDioKlaseID?: string;
    TipPredmetaID: string;
  }

  export const TipPredmetaKlasifikacijskeOznakeExtendedKey =
    'EvidencijaPismena/TipPredmetaKlasifikacijskeOznakeExtended';
  export interface TipPredmetaKlasifikacijskeOznakeExtended {
    ID?: string;
    FiksniDioKlase?: string;
  }

  export const TipPredmetaKlasifikacijskeOznakeBrowseKey =
    'EvidencijaPismena/TipPredmetaKlasifikacijskeOznakeBrowse';
  export interface TipPredmetaKlasifikacijskeOznakeBrowse {
    ID?: string;
    TipPredmetaID?: string;
    FiksniDioKlase?: string;
  }

  export const TipPredmetaUstrojstveneJediniceKey =
    'EvidencijaPismena/TipPredmetaUstrojstveneJedinice';
  export interface TipPredmetaUstrojstveneJedinice {
    ID?: string;
    TipPredmetaID: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const TipPredmetaUstrojstveneJediniceExtendedKey =
    'EvidencijaPismena/TipPredmetaUstrojstveneJediniceExtended';
  export interface TipPredmetaUstrojstveneJediniceExtended {
    ID?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
  }

  export const TipPredmetaUstrojstveneJediniceBrowseKey =
    'EvidencijaPismena/TipPredmetaUstrojstveneJediniceBrowse';
  export interface TipPredmetaUstrojstveneJediniceBrowse {
    ID?: string;
    TipPredmetaID?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
  }

  export const TrenutnoStanjePredmetaKey =
    'EvidencijaPismena/TrenutnoStanjePredmeta';
  export interface TrenutnoStanjePredmeta {
    ID?: string;
    ZadnjiTppID?: string;
    StatusPredmetaID?: string;
  }

  export const UstrojstvenaJedinicaRadnoTijeloZaposlenikIliKontaktKey =
    'EvidencijaPismena/UstrojstvenaJedinicaRadnoTijeloZaposlenikIliKontakt';
  export interface UstrojstvenaJedinicaRadnoTijeloZaposlenikIliKontakt {
    ID?: string;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
  }

  export const LookupSearchKey = 'EvidencijaPismena/LookupSearch';
  export interface LookupSearch {
    Pattern?: string;
    PageSize?: number;
    SortProperty?: string;
  }

  export const ReferenceNonexistentStvarateljWithRadnoTijeloKey =
    'EvidencijaPismena/ReferenceNonexistentStvarateljWithRadnoTijelo';
  export interface ReferenceNonexistentStvarateljWithRadnoTijelo {}

  export const RadnoTijeloCurrentExtendedKey =
    'EvidencijaPismena/RadnoTijeloCurrentExtended';
  export interface RadnoTijeloCurrentExtended {
    ID?: string;
    Naziv?: string;
    OrganizacijskaJedinicaNaziv?: string;
    NazivOrganizacijskaJedinicaNaziv?: string;
  }

  export const ZaposlenikCurrentExtendedKey =
    'EvidencijaPismena/ZaposlenikCurrentExtended';
  export interface ZaposlenikCurrentExtended {
    ID?: string;
    Prezime?: string;
    OrganizacijskaJedinicaNaziv?: string;
    NazivOrganizacijskaJedinicaNaziv?: string;
  }

  export const UstrojstvenaJedinicaCurrentExtendedKey =
    'EvidencijaPismena/UstrojstvenaJedinicaCurrentExtended';
  export interface UstrojstvenaJedinicaCurrentExtended {
    ID?: string;
    Naziv?: string;
    OrganizacijskaJedinicaNaziv?: string;
    NazivOrganizacijskaJedinicaNaziv?: string;
  }

  export const VezivanjeKey = 'EvidencijaPismena/Vezivanje';
  export interface Vezivanje {
    ID?: string;
    PredmetID: string;
    PismenoID?: string;
    GlavniPredmetID: string;
    DatumKreiranja?: Date;
    TemeljemPismena?: boolean;
    PonistavanjeVezanja?: boolean;
    GrupnoVezivanjeID?: string;
    KreiraoID: string;
  }

  export const ValidForVezivanjeKey = 'EvidencijaPismena/ValidForVezivanje';
  export interface ValidForVezivanje {}

  export const ValidForVezivanjeGlavniPredmetKey =
    'EvidencijaPismena/ValidForVezivanjeGlavniPredmet';
  export interface ValidForVezivanjeGlavniPredmet {}

  export const ValidForPonistavanjeVezivanjaGlavniPredmetKey =
    'EvidencijaPismena/ValidForPonistavanjeVezivanjaGlavniPredmet';
  export interface ValidForPonistavanjeVezivanjaGlavniPredmet {}

  export const UpsertPredmetVezivanjeKey =
    'EvidencijaPismena/UpsertPredmetVezivanje';
  export interface UpsertPredmetVezivanje {
    PredmetID: string;
    GlavniPredmetID: string;
    VezivanjeID?: string;
    GrupnoVezivanjeID?: string;
  }

  export const ExcludePredmetsKey = 'EvidencijaPismena/ExcludePredmets';
  export interface ExcludePredmets {
    PredmetIDsToExclude?: string;
  }

  export const GetVezaniPredmetiKey = 'EvidencijaPismena/GetVezaniPredmeti';
  export interface GetVezaniPredmeti {
    PredmetID?: string;
  }

  export const UpsertPredmetPonistiVezivanjeKey =
    'EvidencijaPismena/UpsertPredmetPonistiVezivanje';
  export interface UpsertPredmetPonistiVezivanje {
    PredmetID: string;
    VezivanjeID?: string;
    GrupnoVezivanjeID?: string;
  }

  export const UpsertPismenoVezivanjePredmetKey =
    'EvidencijaPismena/UpsertPismenoVezivanjePredmet';
  export interface UpsertPismenoVezivanjePredmet {
    PismenoID: string;
    PredmetID: string;
  }

  export const UpsertPismenoPonistiVezivanjePredmetKey =
    'EvidencijaPismena/UpsertPismenoPonistiVezivanjePredmet';
  export interface UpsertPismenoPonistiVezivanjePredmet {
    PismenoID: string;
  }

  export const VezivanjeKaoPromjenaNadleznostiKey =
    'EvidencijaPismena/VezivanjeKaoPromjenaNadleznosti';
  export interface VezivanjeKaoPromjenaNadleznosti {
    ID?: string;
    GlavniUNadleznostiID?: string;
  }

  export const VezivanjeKaoPromjenaNadleznosti_MaterializedKey =
    'EvidencijaPismena/VezivanjeKaoPromjenaNadleznosti_Materialized';
  export interface VezivanjeKaoPromjenaNadleznosti_Materialized {
    ID?: string;
    GlavniUNadleznostiID?: string;
  }

  export const PredmetiPlusVezeNaGlavniKey =
    'EvidencijaPismena/PredmetiPlusVezeNaGlavni';
  export interface PredmetiPlusVezeNaGlavni {
    ID?: string;
    PredmetID?: string;
    DatumOd?: Date;
    DatumDo?: Date;
    PodaciSPredmetaID?: string;
  }

  export const VezaniPredmetiKey = 'EvidencijaPismena/VezaniPredmeti';
  export interface VezaniPredmeti {
    ID?: string;
    GlavniPredmetID?: string;
    GlavniPredmetKlasifikacijskaOznaka?: string;
  }

  export const DocumentTemplatePismenoCTXKey =
    'EvidencijaPismena/DocumentTemplatePismenoCTX';
  export interface DocumentTemplatePismenoCTX {
    ID?: string;
    CTXPismenoBarkod?: string;
  }

  export const DocumentTemplatePrilogCTXKey =
    'EvidencijaPismena/DocumentTemplatePrilogCTX';
  export interface DocumentTemplatePrilogCTX {
    ID?: string;
    CTXPrilogBarkod?: string;
  }

  export const CtxPrilogPismenoKey = 'EvidencijaPismena/CtxPrilogPismeno';
  export interface CtxPrilogPismeno {
    ID?: string;
    CtxId?: number;
  }

  export const ComputePismenoCTXFTSKljucneRijeciKey =
    'EvidencijaPismena/ComputePismenoCTXFTSKljucneRijeci';
  export interface ComputePismenoCTXFTSKljucneRijeci {
    ID?: string;
    CTXPismenoID?: string;
  }

  export const DokumentForConnectorKey =
    'EvidencijaPismena/DokumentForConnector';
  export interface DokumentForConnector {
    ID?: string;
    PredmetId?: string;
    PredmetCtxId?: number;
    DokumentCtxId?: number;
    DatumNastanka?: Date;
    UrudzbeniBroj?: string;
    NazivDokumenta?: string;
    SubjektId?: string;
    VrstaDokumentaId?: string;
    VrstaDokumentaCtxId?: number;
    Vrijednost?: number;
    Prilog?: string;
    DjelatnikId?: string;
    DjelatnikCtxId?: number;
  }

  export const StatusPismenaForConnectorKey =
    'EvidencijaPismena/StatusPismenaForConnector';
  export interface StatusPismenaForConnector {
    ID?: string;
    PismenoId?: string;
    PismenoCtxId?: number;
    Status?: string;
    Primjedba?: string;
    Datum?: Date;
    KorisnikId?: string;
    KorisnikCtxId?: number;
  }

  export const AktivanPlanKlasifikacijskihOznakaForConnectorKey =
    'EvidencijaPismena/AktivanPlanKlasifikacijskihOznakaForConnector';
  export interface AktivanPlanKlasifikacijskihOznakaForConnector {
    ID?: string;
    PlanKlasifikacijskihOznakaVrijediOd?: Date;
    PlanKlasifikacijskihOznakaVrijediDo?: Date;
    DjelatnostID?: string;
    DjelatnostVrijediOd?: Date;
    NazivDjelatnosti?: string;
    OznakaDjelatnosti?: string;
    DosjeID?: string;
    DosijeVrijediOd?: Date;
    NazivDosijea?: string;
    OznakaDosijea?: string;
    OznakaUpravnosti?: string;
    OblikFiksniDioKlaseUP?: string;
  }

  export const CtxPredmetKey = 'EvidencijaPismena/CtxPredmet';
  export interface CtxPredmet {
    ID?: string;
    CtxId?: number;
  }

  export const ComputePredmetCTXFTSKljucneRijeciKey =
    'EvidencijaPismena/ComputePredmetCTXFTSKljucneRijeci';
  export interface ComputePredmetCTXFTSKljucneRijeci {
    ID?: string;
    CTXPredmetID?: string;
  }

  export const PredmetForConnectorKey = 'EvidencijaPismena/PredmetForConnector';
  export interface PredmetForConnector {
    ID?: string;
    PredmetId?: number;
    Klasa?: string;
    OrgJedinicaCtxId?: number;
    OrgJedinicaId?: string;
    ZaduzeniKorisnikCtxId?: number;
    ZaduzeniKorisnikId?: string;
    NazivPredmeta?: string;
    DatumOtvaranjaPredmeta?: Date;
    RjesavateljCtxId?: number;
    RjesavateljId?: string;
    VezaNaId?: string;
    VezaNaCtxId?: number;
    SubjektId?: string;
    SubjektCtxId?: number;
  }

  export const StatusPredmetaForConnectorKey =
    'EvidencijaPismena/StatusPredmetaForConnector';
  export interface StatusPredmetaForConnector {
    ID?: string;
    PredmetId?: string;
    Datum?: Date;
    Status?: string;
    Primjedba?: string;
    KorisnikId?: string;
    KorisnikCtxId?: number;
  }

  export const ComputePrilogCTXFTSKljucneRijeciKey =
    'EvidencijaPismena/ComputePrilogCTXFTSKljucneRijeci';
  export interface ComputePrilogCTXFTSKljucneRijeci {
    ID?: string;
    CTXPrilogID?: string;
  }

  export const PismenoCheckoutanoKey = 'EvidencijaPismena/PismenoCheckoutano';
  export interface PismenoCheckoutano {}

  export const ValidForPostaviStatusNaCheckoutanoPismenoKey =
    'EvidencijaPismena/ValidForPostaviStatusNaCheckoutanoPismeno';
  export interface ValidForPostaviStatusNaCheckoutanoPismeno {}

  export const ValidateBrisanjePrilogDocumentCheckoutKey =
    'EvidencijaPismena/ValidateBrisanjePrilogDocumentCheckout';
  export interface ValidateBrisanjePrilogDocumentCheckout {}

  export const PredmetForPismohranaConnectorKey =
    'EvidencijaPismena/PredmetForPismohranaConnector';
  export interface PredmetForPismohranaConnector {
    ID?: string;
    Klasa?: string;
    FiksniDioKlase?: string;
    NazivPredmeta?: string;
    DatumOtvaranjaPredmeta?: Date;
    NazivZadnjegStatusa?: string;
  }

  export const DostavaURadTrenutniSluzbenikIliUJFilterKey =
    'EvidencijaPismena/DostavaURadTrenutniSluzbenikIliUJFilter';
  export interface DostavaURadTrenutniSluzbenikIliUJFilter {
    TrenutniSluzbenikIliUJ?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikStvaratelj_KorisniciSustavaKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikStvaratelj_KorisniciSustava';
  export interface UstrojstvenaJedinicaIliZaposlenikStvaratelj_KorisniciSustava {}

  export const PredmetCustomFieldsSearchKey =
    'EvidencijaPismena/PredmetCustomFieldsSearch';
  export interface PredmetCustomFieldsSearch {}

  export const PismenoCustomFieldsSearchKey =
    'EvidencijaPismena/PismenoCustomFieldsSearch';
  export interface PismenoCustomFieldsSearch {}

  export const DosjeFiksniDioKlaseKey = 'EvidencijaPismena/DosjeFiksniDioKlase';
  export interface DosjeFiksniDioKlase {
    ID?: string;
    FiksniDioKlase?: string;
  }

  export const ObradaPismenoExtendedKey =
    'EvidencijaPismena/ObradaPismenoExtended';
  export interface ObradaPismenoExtended {
    ID?: string;
    PredmetBrisan?: boolean;
    PredmetNijeBrisan?: boolean;
    PredmetVezan?: boolean;
    GlavniPredmet?: boolean;
    Brisano?: boolean;
    NijeBrisano?: boolean;
    SadrziPriloge?: boolean;
  }

  export const PismenoBrowseSearchKey = 'EvidencijaPismena/PismenoBrowseSearch';
  export interface PismenoBrowseSearch {
    Pattern?: string;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    StatusPredmetaIDs?: string;
    StatusPismenaIDs?: string;
    UrudzbeniBroj?: string;
    KlasifikacijskaOznaka?: string;
    KlasifikacijskaOznakaDo?: number;
    LokacijeIDs?: string;
    PosiljateljStvaratelj?: string;
    PosiljateljKlasa?: string;
    PosiljateljUrBroj?: string;
    DodatneOznakeIDs?: string;
    Naziv?: string;
    Nadleznost?: string;
    SuradnikIDs?: string;
    TipPismenaIDs?: string;
    TipPredmetaIDs?: string;
  }

  export const PredmetFilterStrankaForFtsKey =
    'EvidencijaPismena/PredmetFilterStrankaForFts';
  export interface PredmetFilterStrankaForFts {
    ID?: string;
    PredmetID?: string;
    StrankaID?: string;
  }

  export const PredmetFilterNadleznostKey =
    'EvidencijaPismena/PredmetFilterNadleznost';
  export interface PredmetFilterNadleznost {
    ID?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
  }

  export const PredmetBrowseSearchKey = 'EvidencijaPismena/PredmetBrowseSearch';
  export interface PredmetBrowseSearch {
    Pattern?: string;
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
    DatumStatusaOd?: Date;
    DatumStatusaDo?: Date;
    Nadleznost?: string;
    KlasifikacijskaOznaka?: string;
    KlasifikacijskaOznakaDo?: number;
    Stranka?: string;
    LokacijeIDs?: string;
    StatusPredmetaIDs?: string;
    Naziv?: string;
    TipPredmetaIDs?: string;
    Active?: boolean;
    CurrentUser?: string;
    SuradnikIDs?: string;
    StatusPostavio?: string;
    DodatneOznakeIDs?: string;
  }

  export const PredmetFTSCommmonWordsKey =
    'EvidencijaPismena/PredmetFTSCommmonWords';
  export interface PredmetFTSCommmonWords {
    ID?: string;
    Word: string;
    HitCount: number;
  }

  export const ComputePismenoRazvodjenjeFTSKey =
    'EvidencijaPismena/ComputePismenoRazvodjenjeFTS';
  export interface ComputePismenoRazvodjenjeFTS {
    ID?: string;
    PredmetID?: string;
    Razvodjenje?: string;
  }

  export const RazvodjenjePredmetKey = 'EvidencijaPismena/RazvodjenjePredmet';
  export interface RazvodjenjePredmet {
    ID?: string;
    DatumVrijeme?: Date;
    Razvodjenje?: string;
    KorisnikID?: string;
    PredmetID?: string;
    PismenoID?: string;
    OznakaRazvodjenja?: string;
  }

  export const PredmetRazvodjenjeBrowseKey =
    'EvidencijaPismena/PredmetRazvodjenjeBrowse';
  export interface PredmetRazvodjenjeBrowse {
    ID?: string;
    PredmetID?: string;
    DatumVrijeme?: Date;
    Razvodjenje?: string;
    KorisnikPrezimeIme?: string;
  }

  export const PredmetZadnjeRazvodjenjeKey =
    'EvidencijaPismena/PredmetZadnjeRazvodjenje';
  export interface PredmetZadnjeRazvodjenje {
    ID?: string;
    Razvodjenje?: string;
    ZadnjeRazvodjenjeID?: string;
  }

  export const PredmetZadnjeOdlaganjeKey =
    'EvidencijaPismena/PredmetZadnjeOdlaganje';
  export interface PredmetZadnjeOdlaganje {
    ID?: string;
    ZadnjeOdlaganjeRokCuvanja?: Date;
  }

  export const ComputePredmetRazvodjenjeFTSKey =
    'EvidencijaPismena/ComputePredmetRazvodjenjeFTS';
  export interface ComputePredmetRazvodjenjeFTS {
    ID?: string;
    Razvodjenje?: string;
  }

  export const PismenoOcrFieldsSearchKey =
    'EvidencijaPismena/PismenoOcrFieldsSearch';
  export interface PismenoOcrFieldsSearch {
    Sadrzaj?: string;
  }

  export const PovjerljiviUrudzbeniFilterKey =
    'EvidencijaPismena/PovjerljiviUrudzbeniFilter';
  export interface PovjerljiviUrudzbeniFilter {
    StupanjTajnostiIds?: string;
  }

  export const DenyPredmetPermissionsPovjerljiviUrudzbeniKey =
    'EvidencijaPismena/DenyPredmetPermissionsPovjerljiviUrudzbeni';
  export interface DenyPredmetPermissionsPovjerljiviUrudzbeni {
    ID?: string;
  }

  export const MaksimalniStupanjTajnostiPovezanihEntitetaKey =
    'EvidencijaPismena/MaksimalniStupanjTajnostiPovezanihEntiteta';
  export interface MaksimalniStupanjTajnostiPovezanihEntiteta {
    ID?: string;
    PredmetStupanjTajnostiNaziv?: string;
    PovezaniEntitetMaxStupanjTajnostiNaziv?: string;
    StupanjTajnostiJeManjiOdPredmeta?: boolean;
    MaxStupanjTajnostiPovezanihEntitetaID?: string;
  }

  export const PrilogStanjeKey = 'EvidencijaPismena/PrilogStanje';
  export interface PrilogStanje {
    ID?: string;
    PrefiksKlaseStupnjaTajnosti?: string;
    NivoStupnjaTajnosti?: number;
    StupanjTajnostiID?: string;
  }

  export const PrilogStanjeComputedKey =
    'EvidencijaPismena/PrilogStanjeComputed';
  export interface PrilogStanjeComputed {
    ID?: string;
    NivoStupnjaTajnosti?: number;
    PrefiksKlaseStupnjaTajnosti?: string;
    StupanjTajnostiID?: string;
  }

  export const RasporedjivanjeStupanjTajnostiValidationKey =
    'EvidencijaPismena/RasporedjivanjeStupanjTajnostiValidation';
  export interface RasporedjivanjeStupanjTajnostiValidation {
    ID?: string;
    IsValid?: boolean;
  }

  export const RsLookupKey = 'EvidencijaPismena/RsLookup';
  export interface RsLookup {
    ID?: string;
    Value?: string;
    Label?: string;
  }

  export const InternaDostavnaKnjiga_FilterByDatumUrudzbiranjaKey =
    'EvidencijaPismena/InternaDostavnaKnjiga_FilterByDatumUrudzbiranja';
  export interface InternaDostavnaKnjiga_FilterByDatumUrudzbiranja {
    DatumUpisaOd?: Date;
    DatumUpisaDo?: Date;
  }

  export const UrudzbeniZapisnik_FilterByDatumUrudzbiranjaKey =
    'EvidencijaPismena/UrudzbeniZapisnik_FilterByDatumUrudzbiranja';
  export interface UrudzbeniZapisnik_FilterByDatumUrudzbiranja {
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
  }

  export const PrijamnaKnjigaPosiljkeHP_ZakljuciliDjelatniciKey =
    'EvidencijaPismena/PrijamnaKnjigaPosiljkeHP_ZakljuciliDjelatnici';
  export interface PrijamnaKnjigaPosiljkeHP_ZakljuciliDjelatnici {
    DatumZakljucivanjaOd?: Date;
    DatumZakljucivanjaDo?: Date;
    JeZakljuceno?: boolean;
  }

  export const PrijamnaKnjigaPosiljkeHP_KategorijaPosiljkeKey =
    'EvidencijaPismena/PrijamnaKnjigaPosiljkeHP_KategorijaPosiljke';
  export interface PrijamnaKnjigaPosiljkeHP_KategorijaPosiljke {}

  export const RS_PruzateljUslugeKey = 'EvidencijaPismena/RS_PruzateljUsluge';
  export interface RS_PruzateljUsluge {}

  export const RS_Global_UserNameUpravnoTijeloKey =
    'EvidencijaPismena/RS_Global_UserNameUpravnoTijelo';
  export interface RS_Global_UserNameUpravnoTijelo {
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const RS_PredmetReferenti_UserNameUpravnoTijeloKey =
    'EvidencijaPismena/RS_PredmetReferenti_UserNameUpravnoTijelo';
  export interface RS_PredmetReferenti_UserNameUpravnoTijelo {
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
  }

  export const RS_Global_UserNameUstrojstvenaJedinicaKey =
    'EvidencijaPismena/RS_Global_UserNameUstrojstvenaJedinica';
  export interface RS_Global_UserNameUstrojstvenaJedinica {
    DatumOd?: Date;
    DatumDo?: Date;
    PrikaziiNeaktivneUJ?: boolean;
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
  }

  export const RS_PredmetReferenti_UserNameUstrojstvenaJedinicaKey =
    'EvidencijaPismena/RS_PredmetReferenti_UserNameUstrojstvenaJedinica';
  export interface RS_PredmetReferenti_UserNameUstrojstvenaJedinica {
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
    PrikaziiNeaktivneUJ?: boolean;
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
  }

  export const RS_Global_LokacijaKey = 'EvidencijaPismena/RS_Global_Lokacija';
  export interface RS_Global_Lokacija {
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const RS_Global_UserNameZaposlenikKey =
    'EvidencijaPismena/RS_Global_UserNameZaposlenik';
  export interface RS_Global_UserNameZaposlenik {
    DatumOd?: Date;
    DatumDo?: Date;
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
    UstrojstvenaJedinicaID?: string;
    SplitLokacijaIDs?: string;
    PrikaziiNeaktivneUJ?: boolean;
  }

  export const DjelatnikKojiJeZakljucioOtpremuKey =
    'EvidencijaPismena/DjelatnikKojiJeZakljucioOtpremu';
  export interface DjelatnikKojiJeZakljucioOtpremu {
    KoristiDatumZakljucivanja?: boolean;
    UserName?: string;
    DatumUpisaOd?: Date;
    DatumUpisaDo?: Date;
    LokacijaSluzbenikaID?: string;
  }

  export const DjelatnikKojiJeKreiraoPosiljkuKey =
    'EvidencijaPismena/DjelatnikKojiJeKreiraoPosiljku';
  export interface DjelatnikKojiJeKreiraoPosiljku {
    KoristiDatumZakljucivanja?: boolean;
    UserName?: string;
    DatumUpisaOd?: Date;
    DatumUpisaDo?: Date;
    LokacijaSluzbenikaID?: string;
  }

  export const Lokacija_AktivnaKey = 'EvidencijaPismena/Lokacija_Aktivna';
  export interface Lokacija_Aktivna {}

  export const RS_PredmetReferenti_UserNameZaposlenikKey =
    'EvidencijaPismena/RS_PredmetReferenti_UserNameZaposlenik';
  export interface RS_PredmetReferenti_UserNameZaposlenik {
    DatumOsnivanjaOd?: Date;
    DatumOsnivanjaDo?: Date;
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
    UstrojstvenaJedinicaID?: string;
    SplitLokacijaIDs?: string;
    PrikaziiNeaktivneUJ?: boolean;
  }

  export const RS_DostavnaKnjigaZaPostu_PrimateljPosiljkeKey =
    'EvidencijaPismena/RS_DostavnaKnjigaZaPostu_PrimateljPosiljke';
  export interface RS_DostavnaKnjigaZaPostu_PrimateljPosiljke {
    DatumUpisaOd?: Date;
    DatumUpisaDo?: Date;
    KoristiDatumZakljucivanja?: boolean;
    LokacijaSluzbenikaID?: string;
    SplitKreiraoID?: string;
  }

  export const RS_Global_VrstaPosiljkeKey =
    'EvidencijaPismena/RS_Global_VrstaPosiljke';
  export interface RS_Global_VrstaPosiljke {}

  export const RsLookupStringValueKey = 'EvidencijaPismena/RsLookupStringValue';
  export interface RsLookupStringValue {
    ID?: string;
    Value?: string;
    Label?: string;
  }

  export const RS_Global_VrstaUpravnogPostupkaKey =
    'EvidencijaPismena/RS_Global_VrstaUpravnogPostupka';
  export interface RS_Global_VrstaUpravnogPostupka {}

  export const RS_PregledPredmeta_StatusPredmetaKey =
    'EvidencijaPismena/RS_PregledPredmeta_StatusPredmeta';
  export interface RS_PregledPredmeta_StatusPredmeta {
    ID?: string;
    Value?: string;
    Label?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupKorisniciSustavaKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupKorisniciSustava';
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupKorisniciSustava {}

  export const UstrojstvenaJedinicaIliZaposlenik_DohvatUcitanogItemaKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_DohvatUcitanogItema';
  export interface UstrojstvenaJedinicaIliZaposlenik_DohvatUcitanogItema {
    ItemID?: string;
    TrenutnoOdabraniDatum?: Date;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupSmartSearchFilterKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupSmartSearchFilter';
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupSmartSearchFilter {
    AtTime?: Date;
    Pattern?: string;
    IDs?: string;
    ActiveOnly?: boolean;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupStvarateljKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupStvaratelj';
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupStvaratelj {
    DatumNastankaAktaIliPrimitkaPismena?: Date;
    Pattern?: string;
    ID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoyLookupCurrentKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoyLookupCurrent';
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoyLookupCurrent {
    Pattern?: string;
    ID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryLookupAtTimeKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryLookupAtTime';
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryLookupAtTime {
    AtTime?: Date;
    Pattern?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenik_HistoryComputedKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik_HistoryComputed';
  export interface UstrojstvenaJedinicaIliZaposlenik_HistoryComputed {
    ID?: string;
    EntityID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
    PotpunaBrojcanaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
    Naziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivUSastavuNazivBrojcanaOznaka?: string;
    UstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    IsZaposlenik?: boolean;
    RadomUpravljaID?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    BrOznakaNazivUstrojstvenaJedinicaNazivUSastavuNaziv?: string;
    USastavuID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikRpKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikRp';
  export interface UstrojstvenaJedinicaIliZaposlenikRp {
    ID?: string;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    IsZaposlenik?: boolean;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenik';
  export interface UstrojstvenaJedinicaIliZaposlenik {
    ID?: string;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    IsZaposlenik?: boolean;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIsZaposlenikIsActiveKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikIsZaposlenikIsActive';
  export interface UstrojstvenaJedinicaIliZaposlenikIsZaposlenikIsActive {}

  export const UstrojstvenaJedinicaIliZaposlenikIsActiveKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikIsActive';
  export interface UstrojstvenaJedinicaIliZaposlenikIsActive {}

  export const UstrojstvenaJedinicaIliZaposlenikQuickSearchKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikQuickSearch';
  export interface UstrojstvenaJedinicaIliZaposlenikQuickSearch {
    Pattern?: string;
  }

  export const SearchByNazivAndBrojcanaOznakaAndExcludeSluzbenikIDKey =
    'EvidencijaPismena/SearchByNazivAndBrojcanaOznakaAndExcludeSluzbenikID';
  export interface SearchByNazivAndBrojcanaOznakaAndExcludeSluzbenikID {
    Pattern?: string;
    SluzbenikID?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIsZaposlenikKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikIsZaposlenik';
  export interface UstrojstvenaJedinicaIliZaposlenikIsZaposlenik {}

  export const UstrojstvenaJedinicaIliZaposlenikStvarateljKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikStvaratelj';
  export interface UstrojstvenaJedinicaIliZaposlenikStvaratelj {
    ID?: string;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    IsZaposlenik?: boolean;
  }

  export const UstrojstvenaJedinicaIliZaposlenikQuickSearchAtTimeKey =
    'EvidencijaPismena/UstrojstvenaJedinicaIliZaposlenikQuickSearchAtTime';
  export interface UstrojstvenaJedinicaIliZaposlenikQuickSearchAtTime {
    Pattern?: string;
  }

  export const TipoviPismenaZaPrigovoreKey =
    'EvidencijaPismena/TipoviPismenaZaPrigovore';
  export interface TipoviPismenaZaPrigovore {
    PismenoID?: string;
  }

  export const TipoviPismenaZaZahtjeveZaPotvrduKey =
    'EvidencijaPismena/TipoviPismenaZaZahtjeveZaPotvrdu';
  export interface TipoviPismenaZaZahtjeveZaPotvrdu {
    PismenoID?: string;
  }

  export const OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_ChangesKey =
    'EvidencijaPismena/OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_Changes';
  export interface OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    RazinaPovlacenjaBrojcaneOznake?: number;
    DodavnjeNulaDoBrojaZnamenki: number;
    PonovnoKoristenjeObrisanih: boolean;
    VrstaGeneriranjaUrudzbenogBrojaAktaID: string;
  }

  export const OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_HistoryKey =
    'EvidencijaPismena/OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_History';
  export interface OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    RazinaPovlacenjaBrojcaneOznake?: number;
    DodavnjeNulaDoBrojaZnamenki: number;
    PonovnoKoristenjeObrisanih: boolean;
    VrstaGeneriranjaUrudzbenogBrojaAktaID: string;
  }

  export const Predmet_ChangesKey = 'EvidencijaPismena/Predmet_Changes';
  export interface Predmet_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    UNadleznostiID: string;
  }

  export const Predmet_HistoryKey = 'EvidencijaPismena/Predmet_History';
  export interface Predmet_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    UNadleznostiID: string;
  }

  export const PlanKlasifikacijskihOznakaLookupKey =
    'EvidencijaPismena/PlanKlasifikacijskihOznakaLookup';
  export interface PlanKlasifikacijskihOznakaLookup {
    ID?: string;
    Naziv?: string;
    VrijediOd?: Date;
  }

  export const DjelatnostLookupKey = 'EvidencijaPismena/DjelatnostLookup';
  export interface DjelatnostLookup {
    ID?: string;
    Oznaka?: string;
    Naziv?: string;
  }

  export const ZalbaPoDrugostupanjskomTijeluLookupKey =
    'EvidencijaPismena/ZalbaPoDrugostupanjskomTijeluLookup';
  export interface ZalbaPoDrugostupanjskomTijeluLookup {
    ID?: string;
    Naziv?: string;
    ImaRazloge?: boolean;
  }

  export const RazlogUsvajanjeZalbePoDrugostupanjskomTijeluLookupKey =
    'EvidencijaPismena/RazlogUsvajanjeZalbePoDrugostupanjskomTijeluLookup';
  export interface RazlogUsvajanjeZalbePoDrugostupanjskomTijeluLookup {
    ID?: string;
    Naziv?: string;
  }

  export const ZalbaPoPrvostupanjskomTijeluLookupKey =
    'EvidencijaPismena/ZalbaPoPrvostupanjskomTijeluLookup';
  export interface ZalbaPoPrvostupanjskomTijeluLookup {
    ID?: string;
    Naziv?: string;
  }

  export const OdlukaOZahtjevuLookupKey =
    'EvidencijaPismena/OdlukaOZahtjevuLookup';
  export interface OdlukaOZahtjevuLookup {
    ID?: string;
    Naziv?: string;
  }

  export const VrstaUpravnogPostupkaLookupKey =
    'EvidencijaPismena/VrstaUpravnogPostupkaLookup';
  export interface VrstaUpravnogPostupkaLookup {
    ID?: string;
    Oznaka?: string;
    Naziv?: string;
  }

  export const StatusPredmetaLookupKey =
    'EvidencijaPismena/StatusPredmetaLookup';
  export interface StatusPredmetaLookup {
    ID?: string;
    Naziv?: string;
  }

  export const BrojPriloga_MinValueFilterKey =
    'EvidencijaPismena/BrojPriloga_MinValueFilter';
  export interface BrojPriloga_MinValueFilter {}

  export const OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_ChangesActiveUntilKey =
    'EvidencijaPismena/OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_ChangesActiveUntil';
  export interface OdabranaVrstaGeneriranjaUrudzbenogBrojaAkta_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const Predmet_ChangesActiveUntilKey =
    'EvidencijaPismena/Predmet_ChangesActiveUntil';
  export interface Predmet_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const ValidForTipPredmetaKey = 'EvidencijaPismena/ValidForTipPredmeta';
  export interface ValidForTipPredmeta {}

  export const PosiljateljIliStvarateljKey =
    'EvidencijaPismena/PosiljateljIliStvaratelj';
  export interface PosiljateljIliStvaratelj {}

  export const ChangeBrisanoKey = 'EvidencijaPismena/ChangeBrisano';
  export interface ChangeBrisano {}

  export const ChangePredmetBrisanKey = 'EvidencijaPismena/ChangePredmetBrisan';
  export interface ChangePredmetBrisan {}

  export const BrisanoPismenoDodatneOznakeKey =
    'EvidencijaPismena/BrisanoPismenoDodatneOznake';
  export interface BrisanoPismenoDodatneOznake {}

  export const ValidForPismenoEditPismenoDodatnaOznakaKey =
    'EvidencijaPismena/ValidForPismenoEditPismenoDodatnaOznaka';
  export interface ValidForPismenoEditPismenoDodatnaOznaka {}

  export const PismenoValidForPismenoEditPismenoDodatnaOznakaKey =
    'EvidencijaPismena/PismenoValidForPismenoEditPismenoDodatnaOznaka';
  export interface PismenoValidForPismenoEditPismenoDodatnaOznaka {}

  export const IstoPismenoKey = 'EvidencijaPismena/IstoPismeno';
  export interface IstoPismeno {}

  export const PredmetSadrziPismenoKey =
    'EvidencijaPismena/PredmetSadrziPismeno';
  export interface PredmetSadrziPismeno {}

  export const BrisanoPismenoSluzbeneBiljeskeKey =
    'EvidencijaPismena/BrisanoPismenoSluzbeneBiljeske';
  export interface BrisanoPismenoSluzbeneBiljeske {}

  export const ValidForPismenoEditKey = 'EvidencijaPismena/ValidForPismenoEdit';
  export interface ValidForPismenoEdit {}

  export const StatusPismenaValidForPismenoEditKey =
    'EvidencijaPismena/StatusPismenaValidForPismenoEdit';
  export interface StatusPismenaValidForPismenoEdit {}

  export const NoviPlanKlasifikacijskihOznakaUBuducnostiKey =
    'EvidencijaPismena/NoviPlanKlasifikacijskihOznakaUBuducnosti';
  export interface NoviPlanKlasifikacijskihOznakaUBuducnosti {}

  export const VrijediOdProvjeraKey = 'EvidencijaPismena/VrijediOdProvjera';
  export interface VrijediOdProvjera {}

  export const PodsjetnikForPastDateKey =
    'EvidencijaPismena/PodsjetnikForPastDate';
  export interface PodsjetnikForPastDate {}

  export const EditBrisaniPredmetKey = 'EvidencijaPismena/EditBrisaniPredmet';
  export interface EditBrisaniPredmet {}

  export const EditVezaniPredmetKey = 'EvidencijaPismena/EditVezaniPredmet';
  export interface EditVezaniPredmet {}

  export const ValidForPredmetEditKey = 'EvidencijaPismena/ValidForPredmetEdit';
  export interface ValidForPredmetEdit {}

  export const BrisanoPredmetDodatneOznakeKey =
    'EvidencijaPismena/BrisanoPredmetDodatneOznake';
  export interface BrisanoPredmetDodatneOznake {}

  export const ValidForPredmetEditPredmetDodatnaOznakaKey =
    'EvidencijaPismena/ValidForPredmetEditPredmetDodatnaOznaka';
  export interface ValidForPredmetEditPredmetDodatnaOznaka {}

  export const PredmetUpozorenjeIgnoriranoPredmetBrisanKey =
    'EvidencijaPismena/PredmetUpozorenjeIgnoriranoPredmetBrisan';
  export interface PredmetUpozorenjeIgnoriranoPredmetBrisan {}

  export const PredmetUpozorenjeIgnoriranoPredmetVezanKey =
    'EvidencijaPismena/PredmetUpozorenjeIgnoriranoPredmetVezan';
  export interface PredmetUpozorenjeIgnoriranoPredmetVezan {}

  export const MijenjanjeVezanogPredmetaUP2Key =
    'EvidencijaPismena/MijenjanjeVezanogPredmetaUP2';
  export interface MijenjanjeVezanogPredmetaUP2 {}

  export const MijenjanjeVezanogPredmetaUP1Key =
    'EvidencijaPismena/MijenjanjeVezanogPredmetaUP1';
  export interface MijenjanjeVezanogPredmetaUP1 {}

  export const DodavanjePrilogaBrisanomPredmetuTemeljemPismenaKey =
    'EvidencijaPismena/DodavanjePrilogaBrisanomPredmetuTemeljemPismena';
  export interface DodavanjePrilogaBrisanomPredmetuTemeljemPismena {}

  export const DatumNastankaUBuducnostiKey =
    'EvidencijaPismena/DatumNastankaUBuducnosti';
  export interface DatumNastankaUBuducnosti {}

  export const DodavanjePrilogaObrisanomPredmetuKey =
    'EvidencijaPismena/DodavanjePrilogaObrisanomPredmetu';
  export interface DodavanjePrilogaObrisanomPredmetu {}

  export const DodavanjePrilogaVezanomPredmetuKey =
    'EvidencijaPismena/DodavanjePrilogaVezanomPredmetu';
  export interface DodavanjePrilogaVezanomPredmetu {}

  export const PismenoSadrziPrilogKey = 'EvidencijaPismena/PismenoSadrziPrilog';
  export interface PismenoSadrziPrilog {}

  export const PredmetSadrziPrilogKey = 'EvidencijaPismena/PredmetSadrziPrilog';
  export interface PredmetSadrziPrilog {}

  export const RasporedjivanjePredmetBrisanTemeljemPismenaKey =
    'EvidencijaPismena/RasporedjivanjePredmetBrisanTemeljemPismena';
  export interface RasporedjivanjePredmetBrisanTemeljemPismena {}

  export const RasporedjivanjePredmetVezanTemeljemPismenaKey =
    'EvidencijaPismena/RasporedjivanjePredmetVezanTemeljemPismena';
  export interface RasporedjivanjePredmetVezanTemeljemPismena {}

  export const RasporedjivanjePismenoBrisanoTemeljemPismenaKey =
    'EvidencijaPismena/RasporedjivanjePismenoBrisanoTemeljemPismena';
  export interface RasporedjivanjePismenoBrisanoTemeljemPismena {}

  export const RasporedjivanjePredmetBrisanKey =
    'EvidencijaPismena/RasporedjivanjePredmetBrisan';
  export interface RasporedjivanjePredmetBrisan {}

  export const RasporedjivanjePredmetVezanKey =
    'EvidencijaPismena/RasporedjivanjePredmetVezan';
  export interface RasporedjivanjePredmetVezan {}

  export const StatusPismenaOnlyActiveKey =
    'EvidencijaPismena/StatusPismenaOnlyActive';
  export interface StatusPismenaOnlyActive {}

  export const NoneditableStatusKey = 'EvidencijaPismena/NoneditableStatus';
  export interface NoneditableStatus {}

  export const SamoUserEditableStatusiKey =
    'EvidencijaPismena/SamoUserEditableStatusi';
  export interface SamoUserEditableStatusi {}

  export const StatusPredmetaOnlyActiveKey =
    'EvidencijaPismena/StatusPredmetaOnlyActive';
  export interface StatusPredmetaOnlyActive {}

  export const PredefiniraniTipPismenaKlasifikacijskeOznakeKey =
    'EvidencijaPismena/PredefiniraniTipPismenaKlasifikacijskeOznake';
  export interface PredefiniraniTipPismenaKlasifikacijskeOznake {}

  export const PredefiniraniTipPismenaUstrojstveneJediniceKey =
    'EvidencijaPismena/PredefiniraniTipPismenaUstrojstveneJedinice';
  export interface PredefiniraniTipPismenaUstrojstveneJedinice {}

  export const PredefiniraniTipPismenaTipoviPredmetaKey =
    'EvidencijaPismena/PredefiniraniTipPismenaTipoviPredmeta';
  export interface PredefiniraniTipPismenaTipoviPredmeta {}

  export const PredefiniraniTipPredmetaKlasifikacijskeOznakeKey =
    'EvidencijaPismena/PredefiniraniTipPredmetaKlasifikacijskeOznake';
  export interface PredefiniraniTipPredmetaKlasifikacijskeOznake {}

  export const PredefiniraniTipPredmetaUstrojstveneJediniceKey =
    'EvidencijaPismena/PredefiniraniTipPredmetaUstrojstveneJedinice';
  export interface PredefiniraniTipPredmetaUstrojstveneJedinice {}

  export const VezivanjePredmetBrisanTemeljemPismenaKey =
    'EvidencijaPismena/VezivanjePredmetBrisanTemeljemPismena';
  export interface VezivanjePredmetBrisanTemeljemPismena {}

  export const VezivanjePredmetVezanTemeljemPismenaKey =
    'EvidencijaPismena/VezivanjePredmetVezanTemeljemPismena';
  export interface VezivanjePredmetVezanTemeljemPismena {}

  export const VezivanjePredmetGlavniTemeljemPismenaKey =
    'EvidencijaPismena/VezivanjePredmetGlavniTemeljemPismena';
  export interface VezivanjePredmetGlavniTemeljemPismena {}

  export const VezivanjePismenoBrisanoTemeljemPismenaKey =
    'EvidencijaPismena/VezivanjePismenoBrisanoTemeljemPismena';
  export interface VezivanjePismenoBrisanoTemeljemPismena {}

  export const VezivanjePredmetBrisanKey =
    'EvidencijaPismena/VezivanjePredmetBrisan';
  export interface VezivanjePredmetBrisan {}

  export const VezivanjeGlavniPredmetBrisanKey =
    'EvidencijaPismena/VezivanjeGlavniPredmetBrisan';
  export interface VezivanjeGlavniPredmetBrisan {}

  export const VezivanjePredmetVezanKey =
    'EvidencijaPismena/VezivanjePredmetVezan';
  export interface VezivanjePredmetVezan {}

  export const VezivanjeGlavniPredmetVezanKey =
    'EvidencijaPismena/VezivanjeGlavniPredmetVezan';
  export interface VezivanjeGlavniPredmetVezan {}

  export const VezivanjePredmetGlavniKey =
    'EvidencijaPismena/VezivanjePredmetGlavni';
  export interface VezivanjePredmetGlavni {}

  export const PonistiVezivanjePredmetBrisanKey =
    'EvidencijaPismena/PonistiVezivanjePredmetBrisan';
  export interface PonistiVezivanjePredmetBrisan {}

  export const PonistiVezivanjePredmetGlavniKey =
    'EvidencijaPismena/PonistiVezivanjePredmetGlavni';
  export interface PonistiVezivanjePredmetGlavni {}

  export const PonistiVezivanjePredmetBrisanTemeljemPismenaKey =
    'EvidencijaPismena/PonistiVezivanjePredmetBrisanTemeljemPismena';
  export interface PonistiVezivanjePredmetBrisanTemeljemPismena {}

  export const PonistiVezivanjePredmetGlavniTemeljemPismenaKey =
    'EvidencijaPismena/PonistiVezivanjePredmetGlavniTemeljemPismena';
  export interface PonistiVezivanjePredmetGlavniTemeljemPismena {}

  export const PonistiVezivanjePismenoBrisanoTemeljemPismenaKey =
    'EvidencijaPismena/PonistiVezivanjePismenoBrisanoTemeljemPismena';
  export interface PonistiVezivanjePismenoBrisanoTemeljemPismena {}

  export const BrisanjePismenaOdlozenogUAdActaKey =
    'EvidencijaPismena/BrisanjePismenaOdlozenogUAdActa';
  export interface BrisanjePismenaOdlozenogUAdActa {}

  export const PonistavanjeBrisanjePismenaOdlozenogUAdActaIliRokovnikKey =
    'EvidencijaPismena/PonistavanjeBrisanjePismenaOdlozenogUAdActaIliRokovnik';
  export interface PonistavanjeBrisanjePismenaOdlozenogUAdActaIliRokovnik {}

  export const PonistiVezivanjeOdlozenUPismohranuKey =
    'EvidencijaPismena/PonistiVezivanjeOdlozenUPismohranu';
  export interface PonistiVezivanjeOdlozenUPismohranu {}

  export const InvalidStupanjTajnostiKey =
    'EvidencijaPismena/InvalidStupanjTajnosti';
  export interface InvalidStupanjTajnosti {}

  export const NijeMoguceIstodobnoPrigovorIZahtjevZaPotvrduKey =
    'EvidencijaPismena/NijeMoguceIstodobnoPrigovorIZahtjevZaPotvrdu';
  export interface NijeMoguceIstodobnoPrigovorIZahtjevZaPotvrdu {}

  export const SystemRequiredCreatedDateKey =
    'EvidencijaPismena/SystemRequiredCreatedDate';
  export interface SystemRequiredCreatedDate {}

  export const SystemRequiredDatumKreiranjaKey =
    'EvidencijaPismena/SystemRequiredDatumKreiranja';
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredDatumVrijemeKey =
    'EvidencijaPismena/SystemRequiredDatumVrijeme';
  export interface SystemRequiredDatumVrijeme {}

  export const SystemRequiredKreiraoKey =
    'EvidencijaPismena/SystemRequiredKreirao';
  export interface SystemRequiredKreirao {}

  export const SystemRequiredCreatedByKey =
    'EvidencijaPismena/SystemRequiredCreatedBy';
  export interface SystemRequiredCreatedBy {}

  export const SystemRequiredOznakaKey =
    'EvidencijaPismena/SystemRequiredOznaka';
  export interface SystemRequiredOznaka {}

  export const SystemRequiredSifraKey = 'EvidencijaPismena/SystemRequiredSifra';
  export interface SystemRequiredSifra {}

  export const SystemRequiredCtxIdKey = 'EvidencijaPismena/SystemRequiredCtxId';
  export interface SystemRequiredCtxId {}

  export const SystemRequiredActiveKey =
    'EvidencijaPismena/SystemRequiredActive';
  export interface SystemRequiredActive {}

  export const SystemRequiredDocumentTemplateKey =
    'EvidencijaPismena/SystemRequiredDocumentTemplate';
  export interface SystemRequiredDocumentTemplate {}

  export const SystemRequiredPlanKlasifikacijskihOznakaKey =
    'EvidencijaPismena/SystemRequiredPlanKlasifikacijskihOznaka';
  export interface SystemRequiredPlanKlasifikacijskihOznaka {}

  export const SystemRequiredDjelatnostKey =
    'EvidencijaPismena/SystemRequiredDjelatnost';
  export interface SystemRequiredDjelatnost {}

  export const SystemRequiredDosjeKey = 'EvidencijaPismena/SystemRequiredDosje';
  export interface SystemRequiredDosje {}

  export const SystemRequiredStatusPredmetaKey =
    'EvidencijaPismena/SystemRequiredStatusPredmeta';
  export interface SystemRequiredStatusPredmeta {}

  export const SystemRequiredPredmetKey =
    'EvidencijaPismena/SystemRequiredPredmet';
  export interface SystemRequiredPredmet {}

  export const SystemRequiredEntityKey =
    'EvidencijaPismena/SystemRequiredEntity';
  export interface SystemRequiredEntity {}
}

export module EvidencijaPismenaHelpers {}

export module Ustrojstvo {
  export const StatusPismenaMoguceKorisnickeGrupeKey =
    'Ustrojstvo/StatusPismenaMoguceKorisnickeGrupe';
  export interface StatusPismenaMoguceKorisnickeGrupe {
    StatusPismenaID?: string;
  }

  export const StatusPredmetaMoguceKorisnickeGrupeKey =
    'Ustrojstvo/StatusPredmetaMoguceKorisnickeGrupe';
  export interface StatusPredmetaMoguceKorisnickeGrupe {
    StatusPredmetaID?: string;
  }

  export const ZaposlenikKey = 'Ustrojstvo/Zaposlenik';
  export interface Zaposlenik {
    ID?: string;
    Ime: string;
    Prezime: string;
    UserName?: string;
    BrojcanaOznaka: string;
    PripadaID?: string;
    Napomena?: string;
    LokacijaID?: string;
    VrstaZaposlenikaID?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const UstrojstvenaJedinicaKey = 'Ustrojstvo/UstrojstvenaJedinica';
  export interface UstrojstvenaJedinica {
    ID?: string;
    BrojcanaOznaka: string;
    Naziv: string;
    USastavuID?: string;
    Napomena?: string;
    RadomUpravljaID?: string;
    VrstaUstrojstveneJediniceID?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const CtxUstrojstvenaJedinicaKey =
    'Ustrojstvo/CtxUstrojstvenaJedinica';
  export interface CtxUstrojstvenaJedinica {
    ID?: string;
    CtxId?: number;
  }

  export const LokacijaPosiljkaLookupFilterKey =
    'Ustrojstvo/LokacijaPosiljkaLookupFilter';
  export interface LokacijaPosiljkaLookupFilter {
    PrimateljID?: string;
  }

  export const LokacijeUstrojstveneJediniceIliZaposlenikaKey =
    'Ustrojstvo/LokacijeUstrojstveneJediniceIliZaposlenika';
  export interface LokacijeUstrojstveneJediniceIliZaposlenika {
    PrimateljID?: string;
  }

  export const GrupaSuradnikaKey = 'Ustrojstvo/GrupaSuradnika';
  export interface GrupaSuradnika {
    ID?: string;
    Naziv: string;
    KreiraoID?: string;
    DatumKreiranja?: Date;
    Active?: boolean;
  }

  export const GrupaSuradnikaSluzbeniciKey =
    'Ustrojstvo/GrupaSuradnikaSluzbenici';
  export interface GrupaSuradnikaSluzbenici {
    ID?: string;
    GrupaSuradnikaID?: string;
    SluzbenikID?: string;
  }

  export const GrupaSuradnikaExtendedKey = 'Ustrojstvo/GrupaSuradnikaExtended';
  export interface GrupaSuradnikaExtended {
    ID?: string;
    Naziv?: string;
    Kreirao?: string;
    DatumKreiranja?: Date;
    Active?: boolean;
  }

  export const GrupaSuradnikaBrowseKey = 'Ustrojstvo/GrupaSuradnikaBrowse';
  export interface GrupaSuradnikaBrowse {
    ID?: string;
    Naziv?: string;
    Kreirao?: string;
    DatumKreiranja?: Date;
    Active?: boolean;
  }

  export const GrupaSuradnikaSluzbeniciExtendedKey =
    'Ustrojstvo/GrupaSuradnikaSluzbeniciExtended';
  export interface GrupaSuradnikaSluzbeniciExtended {
    ID?: string;
    GrupaSuradnikaID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    KorisnikSustava?: boolean;
  }

  export const GrupaSuradnikaSluzbeniciBrowseKey =
    'Ustrojstvo/GrupaSuradnikaSluzbeniciBrowse';
  export interface GrupaSuradnikaSluzbeniciBrowse {
    ID?: string;
    GrupaSuradnikaID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    KorisnikSustava?: boolean;
  }

  export const UpsertGrupaSuradnikaKey = 'Ustrojstvo/UpsertGrupaSuradnika';
  export interface UpsertGrupaSuradnika {
    GrupaSuradnika?: string;
    Sluzbenici?: string;
  }

  export const KorisnickaGrupaKey = 'Ustrojstvo/KorisnickaGrupa';
  export interface KorisnickaGrupa {
    ID?: string;
    Naziv: string;
    Active?: boolean;
  }

  export const KorisnickaGrupaBrowseKey = 'Ustrojstvo/KorisnickaGrupaBrowse';
  export interface KorisnickaGrupaBrowse {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const ZaposlenikMoguceKorisnickeGrupeKey =
    'Ustrojstvo/ZaposlenikMoguceKorisnickeGrupe';
  export interface ZaposlenikMoguceKorisnickeGrupe {
    ZaposlenikID?: string;
  }

  export const ZaposlenikKorisnickaGrupaKey =
    'Ustrojstvo/ZaposlenikKorisnickaGrupa';
  export interface ZaposlenikKorisnickaGrupa {
    ID?: string;
    ZaposlenikID: string;
    KorisnickaGrupaID: string;
    VrijediOd: Date;
    VrijediDo?: Date;
    DodijelioID?: string;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    ObrisaoID?: string;
    Active?: boolean;
  }

  export const ZaposlenikKorisnickaGrupaExtKey =
    'Ustrojstvo/ZaposlenikKorisnickaGrupaExt';
  export interface ZaposlenikKorisnickaGrupaExt {
    ID?: string;
    IsVrijediOdValid?: boolean;
    IsValid?: boolean;
  }

  export const ZaposlenikKorisnickaGrupaBrowseKey =
    'Ustrojstvo/ZaposlenikKorisnickaGrupaBrowse';
  export interface ZaposlenikKorisnickaGrupaBrowse {
    ID?: string;
    ZaposlenikID?: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    Active?: boolean;
    KorisnickaGrupaNaziv?: string;
    DodijelioNaziv?: string;
    ObrisaoNaziv?: string;
    IsValid?: boolean;
  }

  export const LokacijaKey = 'Ustrojstvo/Lokacija';
  export interface Lokacija {
    ID?: string;
    Naziv: string;
    Adresa: string;
    Active?: boolean;
  }

  export const LokacijaLookupKey = 'Ustrojstvo/LokacijaLookup';
  export interface LokacijaLookup {
    ID?: string;
    Adresa?: string;
    Naziv?: string;
    Active?: boolean;
    NazivsAdresom?: string;
  }

  export const LokacijaBrowseKey = 'Ustrojstvo/LokacijaBrowse';
  export interface LokacijaBrowse {
    ID?: string;
    Naziv?: string;
  }

  export const LokacijaNazivAdresaContainsKey =
    'Ustrojstvo/LokacijaNazivAdresaContains';
  export interface LokacijaNazivAdresaContains {
    Pattern?: string;
  }

  export const LokacijaSAdresomLookupKey = 'Ustrojstvo/LokacijaSAdresomLookup';
  export interface LokacijaSAdresomLookup {
    ID?: string;
    NazivsAdresom?: string;
  }

  export const LokacijaUstrojstveneJediniceFilterKey =
    'Ustrojstvo/LokacijaUstrojstveneJediniceFilter';
  export interface LokacijaUstrojstveneJediniceFilter {
    ActiveSince?: Date;
    USastavuID?: string;
  }

  export const TrenutnaLokacijaUstrojstveneJediniceFilterKey =
    'Ustrojstvo/TrenutnaLokacijaUstrojstveneJediniceFilter';
  export interface TrenutnaLokacijaUstrojstveneJediniceFilter {
    UstrojstvenaJedinicaId?: string;
    TrenutnaLokacijaId?: string;
  }

  export const LokacijaPredmetLookupFilterKey =
    'Ustrojstvo/LokacijaPredmetLookupFilter';
  export interface LokacijaPredmetLookupFilter {
    UNadleznostiID?: string;
  }

  export const UstrojstvenaJedinicaSaLokacijamaKey =
    'Ustrojstvo/UstrojstvenaJedinicaSaLokacijama';
  export interface UstrojstvenaJedinicaSaLokacijama {
    ID?: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    LokacijaNaziv?: string;
    LokacijaAdresa?: string;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
  }

  export const OvlasteniSluzbenici_HistoryKey =
    'Ustrojstvo/OvlasteniSluzbenici_History';
  export interface OvlasteniSluzbenici_History {
    ID?: string;
    OvlasteniSluzbenikID?: string;
    UstrojstvenaJedinicaID?: string;
    Active?: boolean;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const CurrentOvlastenjaByOvlasteniSuzbenikKey =
    'Ustrojstvo/CurrentOvlastenjaByOvlasteniSuzbenik';
  export interface CurrentOvlastenjaByOvlasteniSuzbenik {
    OvlasteniSluzbenikID?: string;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenik_HistoryBrowseKey =
    'Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenik_HistoryBrowse';
  export interface UstrojstvenaJedinicaOvlasteniSluzbenik_HistoryBrowse {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const ZaposlenikPravaRadaBrowseKey =
    'Ustrojstvo/ZaposlenikPravaRadaBrowse';
  export interface ZaposlenikPravaRadaBrowse {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const TrenutnaIBuducaPravaRadaKey =
    'Ustrojstvo/TrenutnaIBuducaPravaRada';
  export interface TrenutnaIBuducaPravaRada {}

  export const ZaposlenikPravaRadaZaBrisatKey =
    'Ustrojstvo/ZaposlenikPravaRadaZaBrisat';
  export interface ZaposlenikPravaRadaZaBrisat {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const ZaposlenikPravaRadaZaBrisatBrowseKey =
    'Ustrojstvo/ZaposlenikPravaRadaZaBrisatBrowse';
  export interface ZaposlenikPravaRadaZaBrisatBrowse {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const UstrojstvenaJedinicaPravaRadaBrowseBaseKey =
    'Ustrojstvo/UstrojstvenaJedinicaPravaRadaBrowseBase';
  export interface UstrojstvenaJedinicaPravaRadaBrowseBase {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const UstrojstvenaJedinicaPravaRadaBrowseKey =
    'Ustrojstvo/UstrojstvenaJedinicaPravaRadaBrowse';
  export interface UstrojstvenaJedinicaPravaRadaBrowse {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const UstrojstvenaJedinicaPravaRadaZaBrisatKey =
    'Ustrojstvo/UstrojstvenaJedinicaPravaRadaZaBrisat';
  export interface UstrojstvenaJedinicaPravaRadaZaBrisat {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const UstrojstvenaJedinicaPravaRadaZaBrisatBrowseKey =
    'Ustrojstvo/UstrojstvenaJedinicaPravaRadaZaBrisatBrowse';
  export interface UstrojstvenaJedinicaPravaRadaZaBrisatBrowse {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const PravoRadaUvidaAktivnoTrenutnoIBuduceKey =
    'Ustrojstvo/PravoRadaUvidaAktivnoTrenutnoIBuduce';
  export interface PravoRadaUvidaAktivnoTrenutnoIBuduce {
    ID?: string;
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    PravoRada?: boolean;
    PravoUvida?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    ZaposlenikIme?: string;
    ZaposlenikPrezime?: string;
    ZaposlenikPotpunaBrojcanaOznaka?: string;
    ZaposlenikAktivan?: boolean;
    PripadaID?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    KorisnikSustava?: boolean;
    UJNaziv?: string;
    UJPotpunaBrojcanaOznaka?: string;
    UJAktivna?: boolean;
  }

  export const UstrojstvenaJedinicaPravaRadaUvidaBrowseKey =
    'Ustrojstvo/UstrojstvenaJedinicaPravaRadaUvidaBrowse';
  export interface UstrojstvenaJedinicaPravaRadaUvidaBrowse {
    ID?: string;
    ZaposlenikPrezime?: string;
    ZaposlenikIme?: string;
    ZaposlenikPotpunaBrojcanaOznaka?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    KorisnikSustava?: boolean;
    ZaposlenikAktivan?: boolean;
    PravoRada?: boolean;
    PravoUvida?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
  }

  export const ZaposlenikSearchKey = 'Ustrojstvo/ZaposlenikSearch';
  export interface ZaposlenikSearch {
    Pattern?: string;
  }

  export const ZaposlenikPravaRadaUvidaUjBrowseKey =
    'Ustrojstvo/ZaposlenikPravaRadaUvidaUjBrowse';
  export interface ZaposlenikPravaRadaUvidaUjBrowse {
    ID?: string;
    UJNaziv?: string;
    UJPotpunaBrojcanaOznaka?: string;
    UJAktivna?: boolean;
    PravoRada?: boolean;
    PravoUvida?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    PripadaID?: string;
  }

  export const SluzbeniciSPravomUvida_HistoryKey =
    'Ustrojstvo/SluzbeniciSPravomUvida_History';
  export interface SluzbeniciSPravomUvida_History {
    ID?: string;
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    Active?: boolean;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const CurrentPravaUvidaByZaposlenikKey =
    'Ustrojstvo/CurrentPravaUvidaByZaposlenik';
  export interface CurrentPravaUvidaByZaposlenik {
    ZaposlenikID?: string;
  }

  export const SluzbeniciSPravomUvida_HistoryBrowseKey =
    'Ustrojstvo/SluzbeniciSPravomUvida_HistoryBrowse';
  export interface SluzbeniciSPravomUvida_HistoryBrowse {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const ZaposlenikPravaUvidaBrowseKey =
    'Ustrojstvo/ZaposlenikPravaUvidaBrowse';
  export interface ZaposlenikPravaUvidaBrowse {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const TrenutnaIBuducaPravaUvidaKey =
    'Ustrojstvo/TrenutnaIBuducaPravaUvida';
  export interface TrenutnaIBuducaPravaUvida {}

  export const UstrojstvenaJedinicaPravaUvidaBrowseBaseKey =
    'Ustrojstvo/UstrojstvenaJedinicaPravaUvidaBrowseBase';
  export interface UstrojstvenaJedinicaPravaUvidaBrowseBase {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const UstrojstvenaJedinicaPravaUvidaBrowseKey =
    'Ustrojstvo/UstrojstvenaJedinicaPravaUvidaBrowse';
  export interface UstrojstvenaJedinicaPravaUvidaBrowse {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
    Active?: boolean;
    Napomena?: string;
    DeaktivacijaNapomena?: string;
  }

  export const UstrojstvenaJedinicaPravaUvidaZaBrisatKey =
    'Ustrojstvo/UstrojstvenaJedinicaPravaUvidaZaBrisat';
  export interface UstrojstvenaJedinicaPravaUvidaZaBrisat {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const UstrojstvenaJedinicaPravaUvidaZaBrisatBrowseKey =
    'Ustrojstvo/UstrojstvenaJedinicaPravaUvidaZaBrisatBrowse';
  export interface UstrojstvenaJedinicaPravaUvidaZaBrisatBrowse {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Prezime?: string;
    Ime?: string;
    BrojcanaOznaka?: string;
    Pripada?: string;
    Lokacija?: string;
    KorisnikSustava?: boolean;
    KorisnickeUloge?: string;
    ZaposlenikAktivan?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const ZaposlenikPravaUvidaZaBrisatKey =
    'Ustrojstvo/ZaposlenikPravaUvidaZaBrisat';
  export interface ZaposlenikPravaUvidaZaBrisat {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const ZaposlenikPravaUvidaZaBrisatBrowseKey =
    'Ustrojstvo/ZaposlenikPravaUvidaZaBrisatBrowse';
  export interface ZaposlenikPravaUvidaZaBrisatBrowse {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    NazivUstrojstvenaJedinica?: string;
    BrojcanaOznakaUstrojstvenaJedinica?: string;
    LokacijeUstrojstvenaJedinica?: string;
    AktivnaUstrojstvenaJedinica?: boolean;
    DatumOd?: Date;
    DatumDo?: Date;
  }

  export const RadnoTijeloKey = 'Ustrojstvo/RadnoTijelo';
  export interface RadnoTijelo {
    ID?: string;
    Naziv: string;
    RadomUpravljaID?: string;
    USastavuID: string;
    VrstaRadnogTijelaID: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const RadnoTijelo_ChangesKey = 'Ustrojstvo/RadnoTijelo_Changes';
  export interface RadnoTijelo_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    Naziv: string;
    Active?: boolean;
    RadomUpravljaID?: string;
    USastavuID: string;
    VrstaRadnogTijelaID: string;
  }

  export const RadnoTijeloOvlasteniSluzbeniciKey =
    'Ustrojstvo/RadnoTijeloOvlasteniSluzbenici';
  export interface RadnoTijeloOvlasteniSluzbenici {
    ID?: string;
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const VrstaRadnogTijelaKey = 'Ustrojstvo/VrstaRadnogTijela';
  export interface VrstaRadnogTijela {
    ID?: string;
    Naziv: string;
  }

  export const VrstaRadnogTijelaBrowseKey =
    'Ustrojstvo/VrstaRadnogTijelaBrowse';
  export interface VrstaRadnogTijelaBrowse {
    ID?: string;
    Naziv?: string;
  }

  export const RadnoTijeloAtTimeBrowseKey =
    'Ustrojstvo/RadnoTijeloAtTimeBrowse';
  export interface RadnoTijeloAtTimeBrowse {
    ID?: string;
    Naziv?: string;
    VrstaRadnogTijelaID?: string;
    USastavuID?: string;
    RadomUpravljaID?: string;
    VrstaRadnogTijelaNaziv?: string;
    USastavuNaziv?: string;
    RadomUpravljaNaziv?: string;
    OvlasteniSluzbeniciRadnogTijela?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
  }

  export const RadnoTijeloHistoryKey = 'Ustrojstvo/RadnoTijeloHistory';
  export interface RadnoTijeloHistory {
    ActiveSince?: Date;
  }

  export const RadnoTijeloAtTimeSmartSearchFilterKey =
    'Ustrojstvo/RadnoTijeloAtTimeSmartSearchFilter';
  export interface RadnoTijeloAtTimeSmartSearchFilter {
    ActiveSince?: Date;
    Pattern?: string;
  }

  export const RadnoTijeloAtTimeGetSelectionKey =
    'Ustrojstvo/RadnoTijeloAtTimeGetSelection';
  export interface RadnoTijeloAtTimeGetSelection {
    ActiveSince?: Date;
    IDs?: string;
  }

  export const UpsertRadnoTijeloAtTimeKey =
    'Ustrojstvo/UpsertRadnoTijeloAtTime';
  export interface UpsertRadnoTijeloAtTime {
    RadnoTijelo?: string;
    OvlasteniSluzbenici?: string;
  }

  export const CheckRadnoTijeloOvlasteniSluzbenikKey =
    'Ustrojstvo/CheckRadnoTijeloOvlasteniSluzbenik';
  export interface CheckRadnoTijeloOvlasteniSluzbenik {
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const UpsertRadnoTijeloOvlasteniSluzbenikKey =
    'Ustrojstvo/UpsertRadnoTijeloOvlasteniSluzbenik';
  export interface UpsertRadnoTijeloOvlasteniSluzbenik {
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const UpsertRadnoTijeloClanKey = 'Ustrojstvo/UpsertRadnoTijeloClan';
  export interface UpsertRadnoTijeloClan {
    RadnoTijeloID?: string;
    ClanID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const CheckRadnoTijeloKey = 'Ustrojstvo/CheckRadnoTijelo';
  export interface CheckRadnoTijelo {
    RadnoTijeloID?: string;
    AtTime?: Date;
  }

  export const RadnoTijeloChangesKey = 'Ustrojstvo/RadnoTijeloChanges';
  export interface RadnoTijeloChanges {
    ID?: string;
    Naziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const RadnoTijeloChangesLookupKey =
    'Ustrojstvo/RadnoTijeloChangesLookup';
  export interface RadnoTijeloChangesLookup {
    ID?: string;
    Naziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const RadnoTijeloChangesLookupSmartSearchFilterKey =
    'Ustrojstvo/RadnoTijeloChangesLookupSmartSearchFilter';
  export interface RadnoTijeloChangesLookupSmartSearchFilter {
    Pattern?: string;
  }

  export const RadnoTijeloKontaktKey = 'Ustrojstvo/RadnoTijeloKontakt';
  export interface RadnoTijeloKontakt {
    ID?: string;
    RadnoTijeloID?: string;
    KontaktID?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const CheckRadnoTijeloKontaktKey =
    'Ustrojstvo/CheckRadnoTijeloKontakt';
  export interface CheckRadnoTijeloKontakt {
    OsnovniKontaktID?: string;
    RadnoTijeloID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const UpsertRadnoTijeloKontaktKey =
    'Ustrojstvo/UpsertRadnoTijeloKontakt';
  export interface UpsertRadnoTijeloKontakt {
    OsnovniKontaktID?: string;
    RadnoTijeloID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const RadnoTijeloClanAtTimeKey = 'Ustrojstvo/RadnoTijeloClanAtTime';
  export interface RadnoTijeloClanAtTime {
    ID?: string;
    Naziv?: string;
    UstrojstvenaJedinica?: string;
    Lokacija?: string;
    RadnoTijeloID?: string;
    ClanID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    IsZaposlenik?: boolean;
    Active?: boolean;
    BaseEntityActive?: boolean;
    ActiveReason?: string;
  }

  export const RadnoTijeloClanAtTimeFilterKey =
    'Ustrojstvo/RadnoTijeloClanAtTimeFilter';
  export interface RadnoTijeloClanAtTimeFilter {
    AtTime?: Date;
    RadnoTijeloID?: string;
    Pattern?: string;
  }

  export const RadnoTijeloLogKey = 'Ustrojstvo/RadnoTijeloLog';
  export interface RadnoTijeloLog {
    ID?: string;
    Created?: Date;
    ContextInfo?: string;
    Description?: string;
    ItemId?: string;
    AtTime?: Date;
    IsChange?: boolean;
  }

  export const RadnoTijeloLogGetFilterKey =
    'Ustrojstvo/RadnoTijeloLogGetFilter';
  export interface RadnoTijeloLogGetFilter {
    RadnoTijeloID?: string;
  }

  export const ComputeRadnoTijeloCurrentKey =
    'Ustrojstvo/ComputeRadnoTijeloCurrent';
  export interface ComputeRadnoTijeloCurrent {
    ID?: string;
    Naziv?: string;
    VrstaRadnogTijelaID?: string;
    RadomUpravljaID?: string;
    USastavuID?: string;
    Active?: boolean;
    AtTime?: Date;
  }

  export const RadnoTijeloCurrentKey = 'Ustrojstvo/RadnoTijeloCurrent';
  export interface RadnoTijeloCurrent {
    ID?: string;
    AtTime?: Date;
    Naziv?: string;
    Active?: boolean;
    VrstaRadnogTijelaID?: string;
    RadomUpravljaID?: string;
    USastavuID?: string;
  }

  export const UniqueActiveBrojcanaOznakaKey =
    'Ustrojstvo/UniqueActiveBrojcanaOznaka';
  export interface UniqueActiveBrojcanaOznaka {}

  export const UstrojstvenaJedinicaLokacijaKey =
    'Ustrojstvo/UstrojstvenaJedinicaLokacija';
  export interface UstrojstvenaJedinicaLokacija {
    ID?: string;
    UstrojstvenaJedinicaID: string;
    LokacijaID: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenikKey =
    'Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenik';
  export interface UstrojstvenaJedinicaOvlasteniSluzbenik {
    ID?: string;
    UstrojstvenaJedinicaID: string;
    OvlasteniSluzbenikID: string;
    Napomena?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const UpsertZaposlenikPravoRadaKey =
    'Ustrojstvo/UpsertZaposlenikPravoRada';
  export interface UpsertZaposlenikPravoRada {
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    Napomena?: string;
  }

  export const UpsertUstrojstvenaJedinicaAtTimeKey =
    'Ustrojstvo/UpsertUstrojstvenaJedinicaAtTime';
  export interface UpsertUstrojstvenaJedinicaAtTime {
    ActiveUntil?: Date;
    UstrojstvenaJedinica?: string;
    Lokacije?: string;
  }

  export const UpsertUstrojsvenaJedinicaLokacijeForPeriodKey =
    'Ustrojstvo/UpsertUstrojsvenaJedinicaLokacijeForPeriod';
  export interface UpsertUstrojsvenaJedinicaLokacijeForPeriod {
    UstrojstvenaJedinicaID?: string;
    Lokacije?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const UpsertUstrojsvenaJedinicaOvlasteniSluzbeniciForPeriodKey =
    'Ustrojstvo/UpsertUstrojsvenaJedinicaOvlasteniSluzbeniciForPeriod';
  export interface UpsertUstrojsvenaJedinicaOvlasteniSluzbeniciForPeriod {
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenici?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const UpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriodKey =
    'Ustrojstvo/UpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriod';
  export interface UpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriod {
    UstrojstvenaJedinicaID?: string;
    SluzbeniciSPravomUvida?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const UpsertUstrojstvenaJedinicaZaposlenikAtTimeKey =
    'Ustrojstvo/UpsertUstrojstvenaJedinicaZaposlenikAtTime';
  export interface UpsertUstrojstvenaJedinicaZaposlenikAtTime {
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const SaveZaposlenikAtTimeKey = 'Ustrojstvo/SaveZaposlenikAtTime';
  export interface SaveZaposlenikAtTime {
    ZaposlenikID?: string;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    ActiveSince?: Date;
  }

  export const UpdateUstrojstvenaJedinicaLokacijaKey =
    'Ustrojstvo/UpdateUstrojstvenaJedinicaLokacija';
  export interface UpdateUstrojstvenaJedinicaLokacija {
    UstrojstvenaJedinicaID?: string;
    Lokacije?: string;
  }

  export const UstrojstvenaJedinicaHijerarhijaCurrentKey =
    'Ustrojstvo/UstrojstvenaJedinicaHijerarhijaCurrent';
  export interface UstrojstvenaJedinicaHijerarhijaCurrent {
    ID?: string;
    UstrojstvenaJedinicaTopLevelID?: string;
    UstrojstvenaJedinicaUpravnoTijeloID?: string;
    UstrojstvenaJedinicaLevel2ID?: string;
    UstrojstvenaJedinicaLevel3ID?: string;
    UstrojstvenaJedinicaLevel4ID?: string;
    UstrojstvenaJedinicaLevel5ID?: string;
    BrojcanaOznakaStvaratelja?: string;
    UstrojstvenaJedinica?: string;
    UstrojstvenaJedinicaFullPath?: string;
    Active?: boolean;
  }

  export const UstrojstvenaJedinicaExtendedKey =
    'Ustrojstvo/UstrojstvenaJedinicaExtended';
  export interface UstrojstvenaJedinicaExtended {
    ID?: string;
    BrojcanaOznakaStvaratelja?: string;
    UstrojstvenaJedinicaFullPath?: string;
    UstrojstvenaJedinica?: string;
  }

  export const UstrojstvenaJedinicaChangesKey =
    'Ustrojstvo/UstrojstvenaJedinicaChanges';
  export interface UstrojstvenaJedinicaChanges {
    ID?: string;
    Naziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const UstrojstvenaJedinicaChangesLookupKey =
    'Ustrojstvo/UstrojstvenaJedinicaChangesLookup';
  export interface UstrojstvenaJedinicaChangesLookup {
    ID?: string;
    Naziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const UstrojstvenaJedinicaChangesLookupSmartSearchFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaChangesLookupSmartSearchFilter';
  export interface UstrojstvenaJedinicaChangesLookupSmartSearchFilter {
    Pattern?: string;
  }

  export const UstrojstveneJediniceHistoryKey =
    'Ustrojstvo/UstrojstveneJediniceHistory';
  export interface UstrojstveneJediniceHistory {
    ActiveSince?: Date;
    Pattern?: string;
    VrstaUstrojstveneJediniceID?: string;
    ID?: string;
    ExcludeID?: boolean;
  }

  export const UstrojstvenaJedinicaAtTimeSmartSearchFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaAtTimeSmartSearchFilter';
  export interface UstrojstvenaJedinicaAtTimeSmartSearchFilter {
    AtTime?: Date;
    Pattern?: string;
  }

  export const UstrojstvenaJedinicaAtTimeBrowseKey =
    'Ustrojstvo/UstrojstvenaJedinicaAtTimeBrowse';
  export interface UstrojstvenaJedinicaAtTimeBrowse {
    ID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    VrstaUstrojstveneJediniceNaziv?: string;
    RadomUpravljaNaziv?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
    Lokacije?: string;
    Active?: boolean;
    HasPravaRadaUvida?: number;
    VrstaUstrojstveneJediniceID?: string;
  }

  export const UstrojstvenaJedinicaAtTimeBrowseGetAtTimeFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaAtTimeBrowseGetAtTimeFilter';
  export interface UstrojstvenaJedinicaAtTimeBrowseGetAtTimeFilter {
    AtTime?: Date;
    ID?: string;
  }

  export const UstrojstvenaJedinicaAtTimeBrowseGetSelectionKey =
    'Ustrojstvo/UstrojstvenaJedinicaAtTimeBrowseGetSelection';
  export interface UstrojstvenaJedinicaAtTimeBrowseGetSelection {
    AtTime?: Date;
    IDs?: string;
  }

  export const UstrojstvenaJedinicaAtTimeBrowseSmartSearchFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaAtTimeBrowseSmartSearchFilter';
  export interface UstrojstvenaJedinicaAtTimeBrowseSmartSearchFilter {
    ActiveSince?: Date;
    Pattern?: string;
    FilterUJPropertiesOnly?: boolean;
  }

  export const UstrojstvenaJedinicaGetAtTimeFirstNextKey =
    'Ustrojstvo/UstrojstvenaJedinicaGetAtTimeFirstNext';
  export interface UstrojstvenaJedinicaGetAtTimeFirstNext {
    AtTime?: Date;
    ID?: string;
  }

  export const CheckUstrojstvenaJedinicaLokacijaKey =
    'Ustrojstvo/CheckUstrojstvenaJedinicaLokacija';
  export interface CheckUstrojstvenaJedinicaLokacija {
    AtTime?: Date;
    ID?: string;
  }

  export const CheckUstrojstvenaJedinicaZaposleniciKey =
    'Ustrojstvo/CheckUstrojstvenaJedinicaZaposlenici';
  export interface CheckUstrojstvenaJedinicaZaposlenici {
    AtTime?: Date;
    ID?: string;
  }

  export const UstrojstvenaJedinicaLogKey =
    'Ustrojstvo/UstrojstvenaJedinicaLog';
  export interface UstrojstvenaJedinicaLog {
    ID?: string;
    Created?: Date;
    ContextInfo?: string;
    Description?: string;
    ItemId?: string;
    AtTime?: Date;
    IsChange?: boolean;
  }

  export const UstrojstvenaJedinicaLogGetFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaLogGetFilter';
  export interface UstrojstvenaJedinicaLogGetFilter {
    UstrojstvenaJedincaID?: string;
  }

  export const UstrojstvenaJedinicaAtTimeNazivSmartSerachFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaAtTimeNazivSmartSerachFilter';
  export interface UstrojstvenaJedinicaAtTimeNazivSmartSerachFilter {
    ActiveSinceNew?: Date;
    Pattern?: string;
  }

  export const UstrojstvenaJedinicaDetailKey =
    'Ustrojstvo/UstrojstvenaJedinicaDetail';
  export interface UstrojstvenaJedinicaDetail {
    ID?: string;
    ParentID?: string;
  }

  export const UstrojstvenaJedinicaGetAllDecendentsFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaGetAllDecendentsFilter';
  export interface UstrojstvenaJedinicaGetAllDecendentsFilter {
    AtTime?: Date;
    UstrojstvenaJedincaID?: string;
  }

  export const ComputeUstrojstvenaJedinicaCurrentKey =
    'Ustrojstvo/ComputeUstrojstvenaJedinicaCurrent';
  export interface ComputeUstrojstvenaJedinicaCurrent {
    ID?: string;
    USastavuID?: string;
    RadomUpravljaID?: string;
    BrojcanaOznaka?: string;
    Naziv?: string;
    Active?: boolean;
    AtTime?: Date;
    VrstaUstrojstveneJediniceID?: string;
  }

  export const UstrojstvenaJedinicaCurrentKey =
    'Ustrojstvo/UstrojstvenaJedinicaCurrent';
  export interface UstrojstvenaJedinicaCurrent {
    ID?: string;
    AtTime?: Date;
    BrojcanaOznaka?: string;
    Naziv?: string;
    Active?: boolean;
    USastavuID?: string;
    RadomUpravljaID?: string;
    VrstaUstrojstveneJediniceID?: string;
  }

  export const TipUstrojstveneJediniceLoopupBrowseKey =
    'Ustrojstvo/TipUstrojstveneJediniceLoopupBrowse';
  export interface TipUstrojstveneJediniceLoopupBrowse {
    ID?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
  }

  export const ComputeUstrojstvenaJedinicaHijerarhijaHistoryKey =
    'Ustrojstvo/ComputeUstrojstvenaJedinicaHijerarhijaHistory';
  export interface ComputeUstrojstvenaJedinicaHijerarhijaHistory {
    ID?: string;
    UstrojstvenaJedinicaHistoryID?: string;
    ParentUstrojstvenaJedinicaHistoryID?: string;
    UstrojstvenaJedinicaID?: string;
    NadredjenaUstrojstvenaJedinicaID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    RecursionLevel?: number;
    TopHistoryID?: string;
    Level1HistoryID?: string;
    Level2HistoryID?: string;
    Level3HistoryID?: string;
    Level4HistoryID?: string;
    Level5HistoryID?: string;
    NazivFullPath?: string;
    BrojcanaOznakaFullPath?: string;
    UstrojstvenaJedinicaHistoryNaziv?: string;
    UstrojstvenaJedinicaHistoryBrojcanaOznaka?: string;
  }

  export const UstrojstvenaJedinicaHijerarhijaHistoryKey =
    'Ustrojstvo/UstrojstvenaJedinicaHijerarhijaHistory';
  export interface UstrojstvenaJedinicaHijerarhijaHistory {
    ID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    UstrojstvenaJedinicaHistoryID?: string;
    ParentUstrojstvenaJedinicaHistoryID?: string;
    UstrojstvenaJedinicaID?: string;
    NadredjenaUstrojstvenaJedinicaID?: string;
    TopHistoryID?: string;
    Level1HistoryID?: string;
    Level2HistoryID?: string;
    Level3HistoryID?: string;
    Level4HistoryID?: string;
    Level5HistoryID?: string;
    NazivFullPath?: string;
    BrojcanaOznakaFullPath?: string;
    UstrojstvenaJedinicaHistoryNaziv?: string;
    UstrojstvenaJedinicaHistoryBrojcanaOznaka?: string;
    RecursionLevel?: number;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloKey =
    'Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijelo';
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijelo {
    ID?: string;
    Naziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    IsZaposlenik?: boolean;
    IsRadnoTijelo?: boolean;
    IsUstrojstvenaJedinica?: boolean;
    UstrojstvenaJedinicaID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloQuickSearchKey =
    'Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloQuickSearch';
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloQuickSearch {
    Pattern?: string;
    DatumPrimitka?: Date;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloFilterByDateKey =
    'Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloFilterByDate';
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloFilterByDate {
    DateToFilterBy?: Date;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupBaseKey =
    'Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupBase';
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupBase {
    ID?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupKey =
    'Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookup';
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookup {
    ID?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
  }

  export const SuradniciNaPismenimaQuickSearchKey =
    'Ustrojstvo/SuradniciNaPismenimaQuickSearch';
  export interface SuradniciNaPismenimaQuickSearch {
    Pattern?: string;
    PismenoIDs?: string;
  }

  export const SuradniciNaPredmetimaQuickSearchKey =
    'Ustrojstvo/SuradniciNaPredmetimaQuickSearch';
  export interface SuradniciNaPredmetimaQuickSearch {
    Pattern?: string;
    PredmetIDs?: string;
  }

  export const UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupQuickSearchKey =
    'Ustrojstvo/UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupQuickSearch';
  export interface UstrojstvenaJedinicaIliZaposlenikIliRadnoTijeloLookupQuickSearch {
    Pattern?: string;
  }

  export const UstrojstvenaJedinicaPodredjeneKey =
    'Ustrojstvo/UstrojstvenaJedinicaPodredjene';
  export interface UstrojstvenaJedinicaPodredjene {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
  }

  export const GetUJISvePodredjenjeKey = 'Ustrojstvo/GetUJISvePodredjenje';
  export interface GetUJISvePodredjenje {
    UJIDs?: string;
  }

  export const UstrojstvoChangesEditKey = 'Ustrojstvo/UstrojstvoChangesEdit';
  export interface UstrojstvoChangesEdit {
    ID?: string;
  }

  export const UstrojstvoCompositeKey = 'Ustrojstvo/UstrojstvoComposite';
  export interface UstrojstvoComposite {
    ID?: string;
    NodeType?: number;
    Naziv?: string;
    BrojcanaOznaka?: string;
    USastavuID?: string;
    VrstaID?: string;
    VrstaNaziv?: string;
    Level?: number;
    BrojcanaOznakaForSort?: string;
  }

  export const UstrojstvoAtTimeKey = 'Ustrojstvo/UstrojstvoAtTime';
  export interface UstrojstvoAtTime {
    AtTime?: Date;
    StartNode?: string;
    RetrivalDepth?: number;
    LokacijaID?: string;
  }

  export const UstrojstvoChangesKey = 'Ustrojstvo/UstrojstvoChanges';
  export interface UstrojstvoChanges {
    ID?: string;
    ActiveSince?: Date;
    ActiveSinceFormated?: string;
  }

  export const ChangeUstrojstvoParentKey = 'Ustrojstvo/ChangeUstrojstvoParent';
  export interface ChangeUstrojstvoParent {
    NodeID?: string;
    NodeType?: number;
    ParentNodeID?: string;
    AtTime?: Date;
  }

  export const RecomputeUstrojstvoKey = 'Ustrojstvo/RecomputeUstrojstvo';
  export interface RecomputeUstrojstvo {
    ID?: string;
    KorisnikID?: string;
    DatumPokretanjaRecomptea?: Date;
    Napomena?: string;
    RecomputeAll?: boolean;
  }

  export const RecomputeUstrojstvoStoredProceduresToExecuteKey =
    'Ustrojstvo/RecomputeUstrojstvoStoredProceduresToExecute';
  export interface RecomputeUstrojstvoStoredProceduresToExecute {
    ID?: string;
    StoredProcedureFullName?: string;
    ExecutionOrder?: number;
  }

  export const UstrojstvenaJedinicaToRecomputeKey =
    'Ustrojstvo/UstrojstvenaJedinicaToRecompute';
  export interface UstrojstvenaJedinicaToRecompute {
    ID?: string;
  }

  export const VrstaUstrojstveneJediniceKey =
    'Ustrojstvo/VrstaUstrojstveneJedinice';
  export interface VrstaUstrojstveneJedinice {
    ID?: string;
    Naziv: string;
    RadomUpravlja?: string;
  }

  export const VrstaUstrojstveneJediniceByUstrojstvenaJedinicaFilterKey =
    'Ustrojstvo/VrstaUstrojstveneJediniceByUstrojstvenaJedinicaFilter';
  export interface VrstaUstrojstveneJediniceByUstrojstvenaJedinicaFilter {
    Pattern?: string;
    USastavuID?: string;
    ActiveSince?: Date;
  }

  export const VrstaUstrojstveneJediniceBrowseKey =
    'Ustrojstvo/VrstaUstrojstveneJediniceBrowse';
  export interface VrstaUstrojstveneJediniceBrowse {
    ID?: string;
    Naziv?: string;
    RadomUpravlja?: string;
    PodredjeneVrsteUstrojstvenihJedinica?: string;
  }

  export const VrstaUstrojstveneJediniceExtendedKey =
    'Ustrojstvo/VrstaUstrojstveneJediniceExtended';
  export interface VrstaUstrojstveneJediniceExtended {
    ID?: string;
    PodredjeneVrsteUstrojstvenihJedinica?: string;
  }

  export const VrstaUstrojstveneJediniceRelationsKey =
    'Ustrojstvo/VrstaUstrojstveneJediniceRelations';
  export interface VrstaUstrojstveneJediniceRelations {
    ID?: string;
    USastavuID?: string;
    VrstaUstrojstveneJediniceID?: string;
  }

  export const VrstaUstrojstveneJediniceRelationsBrowseKey =
    'Ustrojstvo/VrstaUstrojstveneJediniceRelationsBrowse';
  export interface VrstaUstrojstveneJediniceRelationsBrowse {
    ID?: string;
    USastavuID?: string;
    VrstaUstrojstveneJediniceNaziv?: string;
  }

  export const UpsertVrstaUstrojstveneJediniceRelationKey =
    'Ustrojstvo/UpsertVrstaUstrojstveneJediniceRelation';
  export interface UpsertVrstaUstrojstveneJediniceRelation {
    ID?: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuID?: string;
    Active?: boolean;
  }

  export const TrenutniKorisnikZaAutorizacijuKey =
    'Ustrojstvo/TrenutniKorisnikZaAutorizaciju';
  export interface TrenutniKorisnikZaAutorizaciju {}

  export const TrenutniKorisnikZaLogiranjeKey =
    'Ustrojstvo/TrenutniKorisnikZaLogiranje';
  export interface TrenutniKorisnikZaLogiranje {}

  export const ZaposlenikKorisniciSustavaKey =
    'Ustrojstvo/ZaposlenikKorisniciSustava';
  export interface ZaposlenikKorisniciSustava {
    ID?: string;
    Ime?: string;
    Prezime?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    BrojcanaOznaka?: string;
    PotpunaBrojcanaOznaka?: string;
    UserRoles?: string;
    UserName?: string;
    KorisnikSustava?: boolean;
    UserRolesFull?: string;
  }

  export const ZaposlenikKorisniciSustavaBrowseKey =
    'Ustrojstvo/ZaposlenikKorisniciSustavaBrowse';
  export interface ZaposlenikKorisniciSustavaBrowse {
    ID?: string;
    Ime?: string;
    Prezime?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    PotpunaBrojcanaOznaka?: string;
    UserRoles?: string;
    UserName?: string;
    KorisnikSustava?: boolean;
  }

  export const ZaposlenikKorisniciSustavaByPatternKey =
    'Ustrojstvo/ZaposlenikKorisniciSustavaByPattern';
  export interface ZaposlenikKorisniciSustavaByPattern {
    Pattern?: string;
  }

  export const Zaposlenik_ChangesKey = 'Ustrojstvo/Zaposlenik_Changes';
  export interface Zaposlenik_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    Ime: string;
    Prezime: string;
    UserName?: string;
    BrojcanaOznaka: string;
    Napomena?: string;
    Active?: boolean;
    PripadaID?: string;
    LokacijaID?: string;
    VrstaZaposlenikaID?: string;
  }

  export const ZaposlenikKontaktDetaljKey =
    'Ustrojstvo/ZaposlenikKontaktDetalj';
  export interface ZaposlenikKontaktDetalj {
    ID?: string;
    ZaposlenikID: string;
    VrstaKontaktDetaljaID: string;
    Vrijednost: string;
    Oznaka?: string;
  }

  export const ZaposlenikKontaktDetaljBrowseKey =
    'Ustrojstvo/ZaposlenikKontaktDetaljBrowse';
  export interface ZaposlenikKontaktDetaljBrowse {
    ID?: string;
    Vrijednost?: string;
    Oznaka?: string;
    ZaposlenikID?: string;
  }

  export const ZaposlenikExtendedKey = 'Ustrojstvo/ZaposlenikExtended';
  export interface ZaposlenikExtended {
    ID?: string;
    BrOznakaNazivUJNaziv?: string;
    ImePrezime?: string;
    PotpunaBrojcanaOznaka?: string;
    UJNaziv?: string;
    Active?: boolean;
  }

  export const ZaposlenikExtendedBrOznakaNazivUJNazivQuickSearchKey =
    'Ustrojstvo/ZaposlenikExtendedBrOznakaNazivUJNazivQuickSearch';
  export interface ZaposlenikExtendedBrOznakaNazivUJNazivQuickSearch {
    Pattern?: string;
  }

  export const VrstaZaposlenikaKey = 'Ustrojstvo/VrstaZaposlenika';
  export interface VrstaZaposlenika {
    ID?: string;
    Naziv: string;
  }

  export const VrstaZaposlenikaBrowseKey = 'Ustrojstvo/VrstaZaposlenikaBrowse';
  export interface VrstaZaposlenikaBrowse {
    ID?: string;
    Naziv?: string;
  }

  export const ZaposlenikAtTimeInfoKey = 'Ustrojstvo/ZaposlenikAtTimeInfo';
  export interface ZaposlenikAtTimeInfo {
    ID?: string;
    RadnaTijela?: string;
  }

  export const ZaposlenikAtTimeInfoFilterKey =
    'Ustrojstvo/ZaposlenikAtTimeInfoFilter';
  export interface ZaposlenikAtTimeInfoFilter {
    AtTime?: Date;
    ZaposlenikID?: string;
  }

  export const ZaposlenikBrowseBaseKey = 'Ustrojstvo/ZaposlenikBrowseBase';
  export interface ZaposlenikBrowseBase {
    ID?: string;
    VrstaZaposlenikaID?: string;
    Ime?: string;
    Prezime?: string;
    BrojcanaOznaka?: string;
    PripadaID?: string;
    LokacijaID?: string;
    RadnaTijelaZaposlenika?: string;
    VrstaZaposlenikaNaziv?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    LokacijaAdresa?: string;
    KorisnikSustava?: boolean;
    UserName?: string;
    UserRoles?: string;
    HasPravaRadaUvida?: number;
    Active?: boolean;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    KorisnickeGrupe?: string;
  }

  export const ZaposlenikBrowseKey = 'Ustrojstvo/ZaposlenikBrowse';
  export interface ZaposlenikBrowse {
    ID?: string;
    VrstaZaposlenikaID?: string;
    Ime?: string;
    Prezime?: string;
    BrojcanaOznaka?: string;
    PripadaID?: string;
    LokacijaID?: string;
    RadnaTijelaZaposlenika?: string;
    VrstaZaposlenikaNaziv?: string;
    PripadaNaziv?: string;
    LokacijaNaziv?: string;
    LokacijaAdresa?: string;
    KorisnikSustava?: boolean;
    UserName?: string;
    UserRoles?: string;
    HasPravaRadaUvida?: number;
    Active?: boolean;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    KorisnickeGrupe?: string;
    StupanjTajnosti?: string;
  }

  export const RadnoTijeloZaposlenikKey = 'Ustrojstvo/RadnoTijeloZaposlenik';
  export interface RadnoTijeloZaposlenik {
    ID?: string;
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const CheckZaposlenikLokacijaAtTimeKey =
    'Ustrojstvo/CheckZaposlenikLokacijaAtTime';
  export interface CheckZaposlenikLokacijaAtTime {
    AtTime?: Date;
    ID?: string;
  }

  export const CheckZaposlenikAtTimeKey = 'Ustrojstvo/CheckZaposlenikAtTime';
  export interface CheckZaposlenikAtTime {
    Zaposlenik: string;
  }

  export const UpsertZaposlenikHistoryKey =
    'Ustrojstvo/UpsertZaposlenikHistory';
  export interface UpsertZaposlenikHistory {
    Zaposlenik: string;
    ActiveUntil?: Date;
  }

  export const CheckRadnoTijeloZaposlenikKey =
    'Ustrojstvo/CheckRadnoTijeloZaposlenik';
  export interface CheckRadnoTijeloZaposlenik {
    ZaposlenikID?: string;
    RadnoTijeloID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const UpsertRadnoTijeloZaposlenikKey =
    'Ustrojstvo/UpsertRadnoTijeloZaposlenik';
  export interface UpsertRadnoTijeloZaposlenik {
    ZaposlenikID?: string;
    RadnoTijeloID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const CheckZaposlenikKey = 'Ustrojstvo/CheckZaposlenik';
  export interface CheckZaposlenik {
    ZaposlenikID?: string;
    AtTime?: Date;
  }

  export const ZaposlenikHistoryChangesKey =
    'Ustrojstvo/ZaposlenikHistoryChanges';
  export interface ZaposlenikHistoryChanges {
    ID?: string;
    Ime?: string;
    Prezime?: string;
    PripadaNaziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
    PripadaID?: string;
  }

  export const ZaposlenikHistoryChangesLookupKey =
    'Ustrojstvo/ZaposlenikHistoryChangesLookup';
  export interface ZaposlenikHistoryChangesLookup {
    ID?: string;
    Ime?: string;
    Prezime?: string;
    PripadaNaziv?: string;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const ZaposlenikHistoryLookupSmartSearchFilterKey =
    'Ustrojstvo/ZaposlenikHistoryLookupSmartSearchFilter';
  export interface ZaposlenikHistoryLookupSmartSearchFilter {
    Pattern?: string;
  }

  export const LokacijaZaposlenikaLookupFilterKey =
    'Ustrojstvo/LokacijaZaposlenikaLookupFilter';
  export interface LokacijaZaposlenikaLookupFilter {
    ActiveSince?: Date;
    PripadaID?: string;
  }

  export const ZaposlenikLookupAtTimeKey = 'Ustrojstvo/ZaposlenikLookupAtTime';
  export interface ZaposlenikLookupAtTime {
    ID?: string;
    ImeIPrezime?: string;
    UstrojstvenaJedinica?: string;
    BrojcanaOznaka?: string;
    PotpunaBrojcanaOznaka?: string;
    Active?: boolean;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
  }

  export const ZaposlenikLookupAtTimeGetFilterKey =
    'Ustrojstvo/ZaposlenikLookupAtTimeGetFilter';
  export interface ZaposlenikLookupAtTimeGetFilter {
    AtTime?: Date;
    ID?: string;
  }

  export const ZaposlenikLookupAtTimeFilterKey =
    'Ustrojstvo/ZaposlenikLookupAtTimeFilter';
  export interface ZaposlenikLookupAtTimeFilter {
    AtTime?: Date;
  }

  export const ZaposlenikLookupAtTimeQuickSearchFilterKey =
    'Ustrojstvo/ZaposlenikLookupAtTimeQuickSearchFilter';
  export interface ZaposlenikLookupAtTimeQuickSearchFilter {
    ActiveSince?: Date;
    Pattern?: string;
  }

  export const ZaposlenikLogKey = 'Ustrojstvo/ZaposlenikLog';
  export interface ZaposlenikLog {
    ID?: string;
    Created?: Date;
    ContextInfo?: string;
    Description?: string;
    ItemId?: string;
    AtTime?: Date;
    IsChange?: boolean;
  }

  export const ZaposlenikLogGetFilterKey = 'Ustrojstvo/ZaposlenikLogGetFilter';
  export interface ZaposlenikLogGetFilter {
    ZaposlenikID?: string;
  }

  export const CheckZaposlenikUstrojstvenaJedinicaKey =
    'Ustrojstvo/CheckZaposlenikUstrojstvenaJedinica';
  export interface CheckZaposlenikUstrojstvenaJedinica {
    AtTime?: Date;
    ID?: string;
  }

  export const SetUserNameForZaposlenikKey =
    'Ustrojstvo/SetUserNameForZaposlenik';
  export interface SetUserNameForZaposlenik {
    ZaposlenikID?: string;
    UserName?: string;
    ZupItUsername?: string;
  }

  export const SetZaposlenikAsKorisnikSustavaKey =
    'Ustrojstvo/SetZaposlenikAsKorisnikSustava';
  export interface SetZaposlenikAsKorisnikSustava {
    ZaposlenikID?: string;
  }

  export const UnsetZaposlenikAsKorisnikSustavaKey =
    'Ustrojstvo/UnsetZaposlenikAsKorisnikSustava';
  export interface UnsetZaposlenikAsKorisnikSustava {
    ZaposlenikID?: string;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvidaKey =
    'Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvida';
  export interface SluzbenikUstrojstveneJediniceSPravomUvida {
    ID?: string;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Napomena?: string;
    Active?: boolean;
    ActiveSince?: Date;
  }

  export const UpsertZaposlenikPravoUvidaKey =
    'Ustrojstvo/UpsertZaposlenikPravoUvida';
  export interface UpsertZaposlenikPravoUvida {
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    Napomena?: string;
  }

  export const ComputeZaposlenikCurrentKey =
    'Ustrojstvo/ComputeZaposlenikCurrent';
  export interface ComputeZaposlenikCurrent {
    ID?: string;
    Ime?: string;
    Prezime?: string;
    PripadaID?: string;
    BrojcanaOznaka?: string;
    Active?: boolean;
    UserName?: string;
    VrstaZaposlenikaID?: string;
    LokacijaID?: string;
    AtTime?: Date;
  }

  export const ZaposlenikCurrentKey = 'Ustrojstvo/ZaposlenikCurrent';
  export interface ZaposlenikCurrent {
    ID?: string;
    AtTime?: Date;
    UserName?: string;
    Ime?: string;
    Prezime?: string;
    BrojcanaOznaka?: string;
    Active?: boolean;
    PripadaID?: string;
    VrstaZaposlenikaID?: string;
    LokacijaID?: string;
  }

  export const CanAccessAllKey = 'Ustrojstvo/CanAccessAll';
  export interface CanAccessAll {
    ID?: string;
  }

  export const ZaposlenikRoleKey = 'Ustrojstvo/ZaposlenikRole';
  export interface ZaposlenikRole {
    ID?: string;
    UserName?: string;
    CanReadAll?: boolean;
    CanEditAll?: boolean;
    CanRemoveAll?: boolean;
    CanCreateAll?: boolean;
    CanReadEditRemoveCreateAll?: boolean;
  }

  export const ZaposlenikRoleBrowseKey = 'Ustrojstvo/ZaposlenikRoleBrowse';
  export interface ZaposlenikRoleBrowse {
    ID?: string;
    UserName?: string;
  }

  export const ZaposlenikPravaRadaUvidaKey =
    'Ustrojstvo/ZaposlenikPravaRadaUvida';
  export interface ZaposlenikPravaRadaUvida {
    ID?: string;
    OvlasteniZaposlenikID: string;
    ZaposlenikID: string;
    VrijediOd: Date;
    VrijediDo?: Date;
    Napomena?: string;
    KreiraoID?: string;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    ObrisaoID?: string;
    IsPravoRadaIliUvida?: boolean;
    Active?: boolean;
  }

  export const GetOvlastenjaForCurrentUserKey =
    'Ustrojstvo/GetOvlastenjaForCurrentUser';
  export interface GetOvlastenjaForCurrentUser {
    IsPravoRadaIliUvida?: boolean;
  }

  export const ZaposlenikPravaRadaUvidaExtKey =
    'Ustrojstvo/ZaposlenikPravaRadaUvidaExt';
  export interface ZaposlenikPravaRadaUvidaExt {
    ID?: string;
    IsVrijediOdValid?: boolean;
    IsValid?: boolean;
    IsPravoRadaIliUvida?: boolean;
    OvlasteniZaposlenikID?: string;
    ZaposlenikID?: string;
  }

  export const ZaposlenikPravaRadaUvidaBrowseKey =
    'Ustrojstvo/ZaposlenikPravaRadaUvidaBrowse';
  export interface ZaposlenikPravaRadaUvidaBrowse {
    ID?: string;
    OvlasteniZaposlenikID?: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    Active?: boolean;
    IsPravoRadaIliUvida?: boolean;
    ZaposlenikIme?: string;
    ZaposlenikPrezime?: string;
    ZaposlenikBrojcanaOznaka?: string;
    Kreirao?: string;
    Obrisao?: string;
    IsValid?: boolean;
  }

  export const ComputePravoRadaZaposlenikaPoPredmetimaKey =
    'Ustrojstvo/ComputePravoRadaZaposlenikaPoPredmetima';
  export interface ComputePravoRadaZaposlenikaPoPredmetima {
    ID?: string;
    ZaposlenikID?: string;
    PredmetID?: string;
    IsPravoRadaIliUvida?: boolean;
  }

  export const PravoRadaZaposlenikaPoPredmetimaKey =
    'Ustrojstvo/PravoRadaZaposlenikaPoPredmetima';
  export interface PravoRadaZaposlenikaPoPredmetima {
    ID?: string;
    IsPravoRadaIliUvida?: boolean;
    PredmetID?: string;
    ZaposlenikID?: string;
  }

  export const RadnoTijeloLookupKey = 'Ustrojstvo/RadnoTijeloLookup';
  export interface RadnoTijeloLookup {
    ID?: string;
    Naziv?: string;
  }

  export const VrstaRadnogTijelaLookupKey =
    'Ustrojstvo/VrstaRadnogTijelaLookup';
  export interface VrstaRadnogTijelaLookup {
    ID?: string;
    Naziv?: string;
  }

  export const UstrojstvenaJedinicaLookupKey =
    'Ustrojstvo/UstrojstvenaJedinicaLookup';
  export interface UstrojstvenaJedinicaLookup {
    ID?: string;
    Naziv?: string;
  }

  export const VrstaUstrojstveneJediniceLookupKey =
    'Ustrojstvo/VrstaUstrojstveneJediniceLookup';
  export interface VrstaUstrojstveneJediniceLookup {
    ID?: string;
    Naziv?: string;
  }

  export const ZaposlenikLookupKey = 'Ustrojstvo/ZaposlenikLookup';
  export interface ZaposlenikLookup {
    ID?: string;
    Ime?: string;
    Prezime?: string;
  }

  export const VrstaZaposlenikaLookupKey = 'Ustrojstvo/VrstaZaposlenikaLookup';
  export interface VrstaZaposlenikaLookup {
    ID?: string;
    Naziv?: string;
  }

  export const ComputeUstrojstvenaJedinicaUSastavuHierarchyKey =
    'Ustrojstvo/ComputeUstrojstvenaJedinicaUSastavuHierarchy';
  export interface ComputeUstrojstvenaJedinicaUSastavuHierarchy {
    ID?: string;
    LeftIndex?: number;
    RightIndex?: number;
    Level?: number;
  }

  export const UstrojstvenaJedinicaUSastavuHierarchyKey =
    'Ustrojstvo/UstrojstvenaJedinicaUSastavuHierarchy';
  export interface UstrojstvenaJedinicaUSastavuHierarchy {
    ID?: string;
    LeftIndex?: number;
    RightIndex?: number;
    Level?: number;
  }

  export const USastavuHierarchyAncestorsKey =
    'Ustrojstvo/USastavuHierarchyAncestors';
  export interface USastavuHierarchyAncestors {
    ID?: string;
  }

  export const USastavuHierarchyDescendantsKey =
    'Ustrojstvo/USastavuHierarchyDescendants';
  export interface USastavuHierarchyDescendants {
    ID?: string;
  }

  export const UstrojstvenaJedinica_AllowedRelation_USastavuKey =
    'Ustrojstvo/UstrojstvenaJedinica_AllowedRelation_USastavu';
  export interface UstrojstvenaJedinica_AllowedRelation_USastavu {
    ID?: string;
    VrstaUstrojstveneJediniceID: string;
    USastavuVrstaUstrojstveneJediniceID: string;
  }

  export const Compute_UstrojstvenaJedinica_AllowedIndirectRelation_USastavuKey =
    'Ustrojstvo/Compute_UstrojstvenaJedinica_AllowedIndirectRelation_USastavu';
  export interface Compute_UstrojstvenaJedinica_AllowedIndirectRelation_USastavu {
    ID?: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuVrstaUstrojstveneJediniceID?: string;
  }

  export const UstrojstvenaJedinica_AllowedIndirectRelation_USastavuKey =
    'Ustrojstvo/UstrojstvenaJedinica_AllowedIndirectRelation_USastavu';
  export interface UstrojstvenaJedinica_AllowedIndirectRelation_USastavu {
    ID?: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuVrstaUstrojstveneJediniceID?: string;
  }

  export const UstrojstvenaJedinica_IsAllowedRelation_USastavuKey =
    'Ustrojstvo/UstrojstvenaJedinica_IsAllowedRelation_USastavu';
  export interface UstrojstvenaJedinica_IsAllowedRelation_USastavu {
    ID?: string;
    Allowed?: boolean;
    Reason?: string;
  }

  export const ValidForJeAktivanZaposlenikKey =
    'Ustrojstvo/ValidForJeAktivanZaposlenik';
  export interface ValidForJeAktivanZaposlenik {}

  export const VrijediDoManjeOdVrijediOdKey =
    'Ustrojstvo/VrijediDoManjeOdVrijediOd';
  export interface VrijediDoManjeOdVrijediOd {}

  export const VrijediOdManjeOdDatumKreiranjaKey =
    'Ustrojstvo/VrijediOdManjeOdDatumKreiranja';
  export interface VrijediOdManjeOdDatumKreiranja {}

  export const DupliZapisKey = 'Ustrojstvo/DupliZapis';
  export interface DupliZapis {}

  export const ValidateUserNameKey = 'Ustrojstvo/ValidateUserName';
  export interface ValidateUserName {}

  export const NotAllowedRelations_USastavuKey =
    'Ustrojstvo/NotAllowedRelations_USastavu';
  export interface NotAllowedRelations_USastavu {}

  export const SystemRequiredKreiraoKey = 'Ustrojstvo/SystemRequiredKreirao';
  export interface SystemRequiredKreirao {}

  export const SystemRequiredDatumKreiranjaKey =
    'Ustrojstvo/SystemRequiredDatumKreiranja';
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredDodijelioKey =
    'Ustrojstvo/SystemRequiredDodijelio';
  export interface SystemRequiredDodijelio {}

  export const SystemRequiredDatumPokretanjaRecompteaKey =
    'Ustrojstvo/SystemRequiredDatumPokretanjaRecomptea';
  export interface SystemRequiredDatumPokretanjaRecomptea {}

  export const SystemRequiredIsPravoRadaIliUvidaKey =
    'Ustrojstvo/SystemRequiredIsPravoRadaIliUvida';
  export interface SystemRequiredIsPravoRadaIliUvida {}

  export const SystemRequiredCtxIdKey = 'Ustrojstvo/SystemRequiredCtxId';
  export interface SystemRequiredCtxId {}

  export const SystemRequiredActiveKey = 'Ustrojstvo/SystemRequiredActive';
  export interface SystemRequiredActive {}

  export const SystemRequiredGrupaSuradnikaKey =
    'Ustrojstvo/SystemRequiredGrupaSuradnika';
  export interface SystemRequiredGrupaSuradnika {}

  export const SystemRequiredZaposlenikKey =
    'Ustrojstvo/SystemRequiredZaposlenik';
  export interface SystemRequiredZaposlenik {}

  export const RadnoTijeloOvlasteniSluzbenici_ChangesKey =
    'Ustrojstvo/RadnoTijeloOvlasteniSluzbenici_Changes';
  export interface RadnoTijeloOvlasteniSluzbenici_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    Active?: boolean;
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
  }

  export const RadnoTijeloOvlasteniSluzbenici_HistoryKey =
    'Ustrojstvo/RadnoTijeloOvlasteniSluzbenici_History';
  export interface RadnoTijeloOvlasteniSluzbenici_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
  }

  export const RadnoTijeloOvlasteniSluzbeniciAtTimeKey =
    'Ustrojstvo/RadnoTijeloOvlasteniSluzbeniciAtTime';
  export interface RadnoTijeloOvlasteniSluzbeniciAtTime {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    RadnoTijeloActive?: boolean;
    OvlasteniSluzbenikActive?: boolean;
  }

  export const RadnoTijeloOvlasteniSluzbeniciGetEntityAtTimeFilterKey =
    'Ustrojstvo/RadnoTijeloOvlasteniSluzbeniciGetEntityAtTimeFilter';
  export interface RadnoTijeloOvlasteniSluzbeniciGetEntityAtTimeFilter {
    AtTime?: Date;
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
  }

  export const GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciAtTimeKey =
    'Ustrojstvo/GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciAtTime';
  export interface GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciAtTime {
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciForPeriodKey =
    'Ustrojstvo/GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciForPeriod';
  export interface GeneratedUpsertRadnoTijeloOvlasteniSluzbeniciForPeriod {
    RadnoTijeloID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const RadnoTijeloKontakt_ChangesKey =
    'Ustrojstvo/RadnoTijeloKontakt_Changes';
  export interface RadnoTijeloKontakt_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    Active?: boolean;
    RadnoTijeloID?: string;
    KontaktID?: string;
  }

  export const RadnoTijeloKontakt_HistoryKey =
    'Ustrojstvo/RadnoTijeloKontakt_History';
  export interface RadnoTijeloKontakt_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    KontaktID?: string;
  }

  export const RadnoTijeloKontaktAtTimeKey =
    'Ustrojstvo/RadnoTijeloKontaktAtTime';
  export interface RadnoTijeloKontaktAtTime {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    KontaktID?: string;
    RadnoTijeloActive?: boolean;
  }

  export const RadnoTijeloKontaktGetEntityAtTimeFilterKey =
    'Ustrojstvo/RadnoTijeloKontaktGetEntityAtTimeFilter';
  export interface RadnoTijeloKontaktGetEntityAtTimeFilter {
    AtTime?: Date;
    RadnoTijeloID?: string;
    KontaktID?: string;
  }

  export const GeneratedUpsertRadnoTijeloKontaktAtTimeKey =
    'Ustrojstvo/GeneratedUpsertRadnoTijeloKontaktAtTime';
  export interface GeneratedUpsertRadnoTijeloKontaktAtTime {
    RadnoTijeloID?: string;
    KontaktID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const GeneratedUpsertRadnoTijeloKontaktForPeriodKey =
    'Ustrojstvo/GeneratedUpsertRadnoTijeloKontaktForPeriod';
  export interface GeneratedUpsertRadnoTijeloKontaktForPeriod {
    RadnoTijeloID?: string;
    KontaktID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const UstrojstvenaJedinicaLokacija_ChangesKey =
    'Ustrojstvo/UstrojstvenaJedinicaLokacija_Changes';
  export interface UstrojstvenaJedinicaLokacija_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    Active?: boolean;
    UstrojstvenaJedinicaID: string;
    LokacijaID: string;
  }

  export const UstrojstvenaJedinicaLokacija_HistoryKey =
    'Ustrojstvo/UstrojstvenaJedinicaLokacija_History';
  export interface UstrojstvenaJedinicaLokacija_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Active?: boolean;
    UstrojstvenaJedinicaID: string;
    LokacijaID: string;
  }

  export const UstrojstvenaJedinicaLokacijaAtTimeKey =
    'Ustrojstvo/UstrojstvenaJedinicaLokacijaAtTime';
  export interface UstrojstvenaJedinicaLokacijaAtTime {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    LokacijaActive?: boolean;
    UstrojstvenaJedinicaActive?: boolean;
  }

  export const UstrojstvenaJedinicaLokacijaGetEntityAtTimeFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaLokacijaGetEntityAtTimeFilter';
  export interface UstrojstvenaJedinicaLokacijaGetEntityAtTimeFilter {
    AtTime?: Date;
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaLokacijaAtTimeKey =
    'Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaLokacijaAtTime';
  export interface GeneratedUpsertUstrojstvenaJedinicaLokacijaAtTime {
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaLokacijaForPeriodKey =
    'Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaLokacijaForPeriod';
  export interface GeneratedUpsertUstrojstvenaJedinicaLokacijaForPeriod {
    UstrojstvenaJedinicaID?: string;
    LokacijaID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenik_ChangesKey =
    'Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenik_Changes';
  export interface UstrojstvenaJedinicaOvlasteniSluzbenik_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    Napomena?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID: string;
    OvlasteniSluzbenikID: string;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenik_HistoryKey =
    'Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenik_History';
  export interface UstrojstvenaJedinicaOvlasteniSluzbenik_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Napomena?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID: string;
    OvlasteniSluzbenikID: string;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenikAtTimeKey =
    'Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenikAtTime';
  export interface UstrojstvenaJedinicaOvlasteniSluzbenikAtTime {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    UstrojstvenaJedinicaActive?: boolean;
    OvlasteniSluzbenikActive?: boolean;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenikGetEntityAtTimeFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenikGetEntityAtTimeFilter';
  export interface UstrojstvenaJedinicaOvlasteniSluzbenikGetEntityAtTimeFilter {
    AtTime?: Date;
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikAtTimeKey =
    'Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikAtTime';
  export interface GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikAtTime {
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    Active?: boolean;
    Napomena?: string;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikForPeriodKey =
    'Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikForPeriod';
  export interface GeneratedUpsertUstrojstvenaJedinicaOvlasteniSluzbenikForPeriod {
    UstrojstvenaJedinicaID?: string;
    OvlasteniSluzbenikID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
    Napomena?: string;
  }

  export const RadnoTijeloZaposlenik_ChangesKey =
    'Ustrojstvo/RadnoTijeloZaposlenik_Changes';
  export interface RadnoTijeloZaposlenik_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    Active?: boolean;
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
  }

  export const RadnoTijeloZaposlenik_HistoryKey =
    'Ustrojstvo/RadnoTijeloZaposlenik_History';
  export interface RadnoTijeloZaposlenik_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
  }

  export const RadnoTijeloZaposlenikAtTimeKey =
    'Ustrojstvo/RadnoTijeloZaposlenikAtTime';
  export interface RadnoTijeloZaposlenikAtTime {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
    RadnoTijeloActive?: boolean;
    ZaposlenikActive?: boolean;
  }

  export const RadnoTijeloZaposlenikGetEntityAtTimeFilterKey =
    'Ustrojstvo/RadnoTijeloZaposlenikGetEntityAtTimeFilter';
  export interface RadnoTijeloZaposlenikGetEntityAtTimeFilter {
    AtTime?: Date;
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
  }

  export const GeneratedUpsertRadnoTijeloZaposlenikAtTimeKey =
    'Ustrojstvo/GeneratedUpsertRadnoTijeloZaposlenikAtTime';
  export interface GeneratedUpsertRadnoTijeloZaposlenikAtTime {
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const GeneratedUpsertRadnoTijeloZaposlenikForPeriodKey =
    'Ustrojstvo/GeneratedUpsertRadnoTijeloZaposlenikForPeriod';
  export interface GeneratedUpsertRadnoTijeloZaposlenikForPeriod {
    RadnoTijeloID?: string;
    ZaposlenikID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvida_ChangesKey =
    'Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvida_Changes';
  export interface SluzbenikUstrojstveneJediniceSPravomUvida_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    Napomena?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvida_HistoryKey =
    'Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvida_History';
  export interface SluzbenikUstrojstveneJediniceSPravomUvida_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Napomena?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvidaAtTimeKey =
    'Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvidaAtTime';
  export interface SluzbenikUstrojstveneJediniceSPravomUvidaAtTime {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID?: string;
    Active?: boolean;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    UstrojstvenaJedinicaActive?: boolean;
    ZaposlenikActive?: boolean;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvidaGetEntityAtTimeFilterKey =
    'Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvidaGetEntityAtTimeFilter';
  export interface SluzbenikUstrojstveneJediniceSPravomUvidaGetEntityAtTimeFilter {
    AtTime?: Date;
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
  }

  export const GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaAtTimeKey =
    'Ustrojstvo/GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaAtTime';
  export interface GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaAtTime {
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    ActiveSince?: Date;
    Active?: boolean;
    Napomena?: string;
  }

  export const GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriodKey =
    'Ustrojstvo/GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriod';
  export interface GeneratedUpsertSluzbenikUstrojstveneJediniceSPravomUvidaForPeriod {
    UstrojstvenaJedinicaID?: string;
    ZaposlenikID?: string;
    ActiveSince?: Date;
    ActiveUntil?: Date;
    Active?: boolean;
    Napomena?: string;
  }

  export const Zaposlenik_HistoryKey = 'Ustrojstvo/Zaposlenik_History';
  export interface Zaposlenik_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Ime: string;
    Prezime: string;
    UserName?: string;
    BrojcanaOznaka: string;
    Napomena?: string;
    Active?: boolean;
    PripadaID?: string;
    LokacijaID?: string;
    VrstaZaposlenikaID?: string;
  }

  export const ZaposlenikAtTimeKey = 'Ustrojstvo/ZaposlenikAtTime';
  export interface ZaposlenikAtTime {
    ID?: string;
    ActiveUntil?: Date;
    EntityID?: string;
    Ime: string;
    Prezime: string;
    UserName?: string;
    BrojcanaOznaka: string;
    Napomena?: string;
    PripadaID?: string;
    LokacijaID?: string;
    VrstaZaposlenikaID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const ZaposlenikActiveUntilKey = 'Ustrojstvo/ZaposlenikActiveUntil';
  export interface ZaposlenikActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const ZaposlenikGetActiveUntilFilterKey =
    'Ustrojstvo/ZaposlenikGetActiveUntilFilter';
  export interface ZaposlenikGetActiveUntilFilter {
    ID?: string;
    AtTime?: Date;
  }

  export const ZaposlenikGetEntityAtTimeFilterKey =
    'Ustrojstvo/ZaposlenikGetEntityAtTimeFilter';
  export interface ZaposlenikGetEntityAtTimeFilter {
    AtTime?: Date;
    ID?: string;
  }

  export const ZaposlenikAtTimeGetSelectionFilterKey =
    'Ustrojstvo/ZaposlenikAtTimeGetSelectionFilter';
  export interface ZaposlenikAtTimeGetSelectionFilter {
    AtTime?: Date;
    IDs?: string;
  }

  export const GeneratedUpsertZaposlenikAtTimeKey =
    'Ustrojstvo/GeneratedUpsertZaposlenikAtTime';
  export interface GeneratedUpsertZaposlenikAtTime {
    Entity?: string;
  }

  export const GeneratedUpsertZaposlenikForPeriodKey =
    'Ustrojstvo/GeneratedUpsertZaposlenikForPeriod';
  export interface GeneratedUpsertZaposlenikForPeriod {
    Entity?: string;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinica_ChangesKey =
    'Ustrojstvo/UstrojstvenaJedinica_Changes';
  export interface UstrojstvenaJedinica_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    BrojcanaOznaka: string;
    Naziv: string;
    Napomena?: string;
    Active?: boolean;
    RadomUpravljaID?: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuID?: string;
  }

  export const UstrojstvenaJedinica_HistoryKey =
    'Ustrojstvo/UstrojstvenaJedinica_History';
  export interface UstrojstvenaJedinica_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    BrojcanaOznaka: string;
    Naziv: string;
    Napomena?: string;
    Active?: boolean;
    RadomUpravljaID?: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuID?: string;
  }

  export const UstrojstvenaJedinicaAtTimeKey =
    'Ustrojstvo/UstrojstvenaJedinicaAtTime';
  export interface UstrojstvenaJedinicaAtTime {
    ID?: string;
    ActiveUntil?: Date;
    EntityID?: string;
    BrojcanaOznaka: string;
    Naziv: string;
    Napomena?: string;
    RadomUpravljaID?: string;
    VrstaUstrojstveneJediniceID?: string;
    USastavuID?: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const UstrojstvenaJedinicaActiveUntilKey =
    'Ustrojstvo/UstrojstvenaJedinicaActiveUntil';
  export interface UstrojstvenaJedinicaActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinicaGetActiveUntilFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaGetActiveUntilFilter';
  export interface UstrojstvenaJedinicaGetActiveUntilFilter {
    ID?: string;
    AtTime?: Date;
  }

  export const UstrojstvenaJedinicaGetEntityAtTimeFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaGetEntityAtTimeFilter';
  export interface UstrojstvenaJedinicaGetEntityAtTimeFilter {
    AtTime?: Date;
    ID?: string;
  }

  export const UstrojstvenaJedinicaAtTimeGetSelectionFilterKey =
    'Ustrojstvo/UstrojstvenaJedinicaAtTimeGetSelectionFilter';
  export interface UstrojstvenaJedinicaAtTimeGetSelectionFilter {
    AtTime?: Date;
    IDs?: string;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaAtTimeKey =
    'Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaAtTime';
  export interface GeneratedUpsertUstrojstvenaJedinicaAtTime {
    Entity?: string;
  }

  export const GeneratedUpsertUstrojstvenaJedinicaForPeriodKey =
    'Ustrojstvo/GeneratedUpsertUstrojstvenaJedinicaForPeriod';
  export interface GeneratedUpsertUstrojstvenaJedinicaForPeriod {
    Entity?: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijelo_HistoryKey = 'Ustrojstvo/RadnoTijelo_History';
  export interface RadnoTijelo_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    Naziv: string;
    Active?: boolean;
    RadomUpravljaID?: string;
    USastavuID: string;
    VrstaRadnogTijelaID: string;
  }

  export const RadnoTijeloAtTimeKey = 'Ustrojstvo/RadnoTijeloAtTime';
  export interface RadnoTijeloAtTime {
    ID?: string;
    ActiveUntil?: Date;
    EntityID?: string;
    Naziv: string;
    RadomUpravljaID?: string;
    USastavuID: string;
    VrstaRadnogTijelaID: string;
    ActiveSince?: Date;
    Active?: boolean;
  }

  export const RadnoTijeloActiveUntilKey = 'Ustrojstvo/RadnoTijeloActiveUntil';
  export interface RadnoTijeloActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijeloGetActiveUntilFilterKey =
    'Ustrojstvo/RadnoTijeloGetActiveUntilFilter';
  export interface RadnoTijeloGetActiveUntilFilter {
    ID?: string;
    AtTime?: Date;
  }

  export const RadnoTijeloGetEntityAtTimeFilterKey =
    'Ustrojstvo/RadnoTijeloGetEntityAtTimeFilter';
  export interface RadnoTijeloGetEntityAtTimeFilter {
    AtTime?: Date;
    ID?: string;
  }

  export const RadnoTijeloAtTimeGetSelectionFilterKey =
    'Ustrojstvo/RadnoTijeloAtTimeGetSelectionFilter';
  export interface RadnoTijeloAtTimeGetSelectionFilter {
    AtTime?: Date;
    IDs?: string;
  }

  export const GeneratedUpsertRadnoTijeloAtTimeKey =
    'Ustrojstvo/GeneratedUpsertRadnoTijeloAtTime';
  export interface GeneratedUpsertRadnoTijeloAtTime {
    Entity?: string;
  }

  export const GeneratedUpsertRadnoTijeloForPeriodKey =
    'Ustrojstvo/GeneratedUpsertRadnoTijeloForPeriod';
  export interface GeneratedUpsertRadnoTijeloForPeriod {
    Entity?: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijeloOvlasteniSluzbenici_ChangesActiveUntilKey =
    'Ustrojstvo/RadnoTijeloOvlasteniSluzbenici_ChangesActiveUntil';
  export interface RadnoTijeloOvlasteniSluzbenici_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijeloKontakt_ChangesActiveUntilKey =
    'Ustrojstvo/RadnoTijeloKontakt_ChangesActiveUntil';
  export interface RadnoTijeloKontakt_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinicaLokacija_ChangesActiveUntilKey =
    'Ustrojstvo/UstrojstvenaJedinicaLokacija_ChangesActiveUntil';
  export interface UstrojstvenaJedinicaLokacija_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinicaOvlasteniSluzbenik_ChangesActiveUntilKey =
    'Ustrojstvo/UstrojstvenaJedinicaOvlasteniSluzbenik_ChangesActiveUntil';
  export interface UstrojstvenaJedinicaOvlasteniSluzbenik_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijeloZaposlenik_ChangesActiveUntilKey =
    'Ustrojstvo/RadnoTijeloZaposlenik_ChangesActiveUntil';
  export interface RadnoTijeloZaposlenik_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const SluzbenikUstrojstveneJediniceSPravomUvida_ChangesActiveUntilKey =
    'Ustrojstvo/SluzbenikUstrojstveneJediniceSPravomUvida_ChangesActiveUntil';
  export interface SluzbenikUstrojstveneJediniceSPravomUvida_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const Zaposlenik_ChangesActiveUntilKey =
    'Ustrojstvo/Zaposlenik_ChangesActiveUntil';
  export interface Zaposlenik_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const UstrojstvenaJedinica_ChangesActiveUntilKey =
    'Ustrojstvo/UstrojstvenaJedinica_ChangesActiveUntil';
  export interface UstrojstvenaJedinica_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const RadnoTijelo_ChangesActiveUntilKey =
    'Ustrojstvo/RadnoTijelo_ChangesActiveUntil';
  export interface RadnoTijelo_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const SystemRequiredEntityKey = 'Ustrojstvo/SystemRequiredEntity';
  export interface SystemRequiredEntity {}
}

export module Connector {
  export const ServiceLogKey = 'Connector/ServiceLog';
  export interface ServiceLog {
    ID?: string;
    Action?: string;
    IsRequest?: boolean;
    Content?: string;
    CorrelationState?: string;
    TimeStamp?: Date;
  }
}

export module Centrix2 {}

export module Centrix2DMS {
  export const PrincipalScanSettingsKey = 'Centrix2DMS/PrincipalScanSettings';
  export interface PrincipalScanSettings {
    ID?: string;
    ScanAfterSavePismeno?: boolean;
  }

  export const UpsertPrincipalScanSettingsKey =
    'Centrix2DMS/UpsertPrincipalScanSettings';
  export interface UpsertPrincipalScanSettings {
    ScanAfterSavePismeno?: boolean;
  }

  export const DmsInfoPismenoIPriloziKey = 'Centrix2DMS/DmsInfoPismenoIPrilozi';
  export interface DmsInfoPismenoIPrilozi {
    ID?: string;
    PismenoID?: string;
    PredmetID?: string;
    Vrsta?: string;
    Naziv?: string;
    FileName?: string;
    RepositoryID?: string;
  }

  export const DmsDocumentForOcrKey = 'Centrix2DMS/DmsDocumentForOcr';
  export interface DmsDocumentForOcr {
    DocumentID?: string;
    DocumentVersion?: number;
    KlasifikacijskaOznaka?: string;
    NazivPredmeta?: string;
    UrudzbeniBroj?: string;
    NazivPismena?: string;
    PrilogPismeno?: string;
    DmsProvider?: string;
    Subtype?: string;
    LightDMSDmsDocumentForOcrID?: string;
    CmisDmsDmsDocumentForOcrID?: string;
  }

  export const PismenoPrilogForDmsPermissionsKey =
    'Centrix2DMS/PismenoPrilogForDmsPermissions';
  export interface PismenoPrilogForDmsPermissions {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    Tip?: string;
  }

  export const CheckPermissionResultKey = 'Centrix2DMS/CheckPermissionResult';
  export interface CheckPermissionResult {
    Allowed?: boolean;
  }

  export const HasReadPermissionKey = 'Centrix2DMS/HasReadPermission';
  export interface HasReadPermission {
    DocumentID?: string;
  }

  export const CheckReadPermissionKey = 'Centrix2DMS/CheckReadPermission';
  export interface CheckReadPermission {
    DocumentID?: string;
  }

  export const HasWritePermissionKey = 'Centrix2DMS/HasWritePermission';
  export interface HasWritePermission {
    DocumentID?: string;
  }

  export const CheckWritePermissionKey = 'Centrix2DMS/CheckWritePermission';
  export interface CheckWritePermission {
    DocumentID?: string;
  }

  export const CheckValidForDownloadResultKey =
    'Centrix2DMS/CheckValidForDownloadResult';
  export interface CheckValidForDownloadResult {
    Valid?: boolean;
    NotValidReason?: string;
  }

  export const CheckValidForDownloadKey = 'Centrix2DMS/CheckValidForDownload';
  export interface CheckValidForDownload {
    DocumentID?: string;
  }

  export const CheckDownloadPermissionKey =
    'Centrix2DMS/CheckDownloadPermission';
  export interface CheckDownloadPermission {
    DocumentID?: string;
  }

  export const CheckCheckoutPermissionKey =
    'Centrix2DMS/CheckCheckoutPermission';
  export interface CheckCheckoutPermission {
    DocumentID?: string;
  }

  export const CheckUploadPermissionKey = 'Centrix2DMS/CheckUploadPermission';
  export interface CheckUploadPermission {
    DocumentID?: string;
  }
}

export module LightDMS {
  export const DmsDocumentInfoKey = 'LightDMS/DmsDocumentInfo';
  export interface DmsDocumentInfo {
    ID?: string;
    VersionNumber?: number;
    CreatedDate?: Date;
    Name?: string;
    ContentStreamFileName?: string;
    ContentStreamMimeType?: string;
    ContentStreamLength?: number;
    CheckedOutBy?: string;
    CreatedBy?: string;
    CheckinComment?: string;
    LastVersionIsScan?: boolean;
    FileExtension?: string;
    IsScan?: boolean;
    VlasnikZapisa?: string;
    DocumentVersionID?: string;
    FileContentID?: string;
  }

  export const DmsDocumentVersionInfoKey = 'LightDMS/DmsDocumentVersionInfo';
  export interface DmsDocumentVersionInfo {
    ID?: string;
    VersionNumber?: number;
    CreatedDate?: Date;
    Name?: string;
    ContentStreamFileName?: string;
    ContentStreamMimeType?: string;
    ContentStreamLength?: number;
    CheckedOutBy?: string;
    CreatedBy?: string;
    CheckinComment?: string;
    LastVersionIsScan?: boolean;
    FileExtension?: string;
    IsScan?: boolean;
    VlasnikZapisa?: string;
    DocumentVersionID?: string;
    FileContentID?: string;
  }

  export const DmsDocumentForOcrKey = 'LightDMS/DmsDocumentForOcr';
  export interface DmsDocumentForOcr {
    ID?: string;
    DocumentID?: string;
    DocumentVersion?: number;
    KlasifikacijskaOznaka?: string;
    NazivPredmeta?: string;
    UrudzbeniBroj?: string;
    NazivPismena?: string;
    PrilogPismeno?: string;
  }

  export const DocumentVersionKey = 'LightDMS/DocumentVersion';
  export interface DocumentVersion {
    ID?: string;
    IsScan?: boolean;
    FileExtension?: string;
    DocumentID?: string;
    CreatedByID?: string;
    CreatedDate?: Date;
    Comment?: string;
    VersionNumber?: number;
    FileName: string;
    FileContentID: string;
    RepositoryID?: string;
  }

  export const ComputeDocumentStatusExtendedKey =
    'LightDMS/ComputeDocumentStatusExtended';
  export interface ComputeDocumentStatusExtended {
    ID?: string;
    LastVersionIsScan?: boolean;
  }

  export const DocumentStatusKey = 'LightDMS/DocumentStatus';
  export interface DocumentStatus {
    ID?: string;
    LastVersionIsScan?: boolean;
    LastEventID?: string;
    CheckedOutToID?: string;
    IsCheckout?: boolean;
    LastVersionID?: string;
  }

  export const UpsertObrisiDigitalniSadrzajPredmetaIPismenaKey =
    'LightDMS/UpsertObrisiDigitalniSadrzajPredmetaIPismena';
  export interface UpsertObrisiDigitalniSadrzajPredmetaIPismena {
    PredmetID: string;
  }

  export const CheckoutKey = 'LightDMS/Checkout';
  export interface Checkout {
    ID?: string;
    DocumentID?: string;
    CreatedByID?: string;
    CreatedDate?: Date;
    Comment?: string;
    RepositoryID?: string;
  }

  export const MultipleDocumentCheckoutKey =
    'LightDMS/MultipleDocumentCheckout';
  export interface MultipleDocumentCheckout {}

  export const NullDocumentCheckoutKey = 'LightDMS/NullDocumentCheckout';
  export interface NullDocumentCheckout {}

  export const DocumentEventKey = 'LightDMS/DocumentEvent';
  export interface DocumentEvent {
    DocumentID?: string;
    CreatedByID?: string;
    CreatedDate?: Date;
    Comment?: string;
    RepositoryID?: string;
    Subtype?: string;
    CheckoutID?: string;
    DocumentVersionID?: string;
    UndoCheckoutID?: string;
  }

  export const DocumentStatusBeforeEventKey =
    'LightDMS/DocumentStatusBeforeEvent';
  export interface DocumentStatusBeforeEvent {
    ID?: string;
    PreviousEventID?: string;
    DocumentID?: string;
    CheckoutID?: string;
    DocumentVersionID?: string;
    CheckedOutToID?: string;
  }

  export const ComputeDocumentStatusKey = 'LightDMS/ComputeDocumentStatus';
  export interface ComputeDocumentStatus {
    ID?: string;
    LastEventID?: string;
    CheckedOutToID?: string;
    IsCheckout?: boolean;
    LastVersionID?: string;
  }

  export const OtherUserDocumentCheckInKey =
    'LightDMS/OtherUserDocumentCheckIn';
  export interface OtherUserDocumentCheckIn {}

  export const DocumentVersionExtKey = 'LightDMS/DocumentVersionExt';
  export interface DocumentVersionExt {
    ID?: string;
    SizeInKBytes?: number;
    FileExtension?: string;
  }

  export const FileContentKey = 'LightDMS/FileContent';
  export interface FileContent {
    ID?: string;
    CreatedDate?: Date;
    AzureStorage?: boolean;
  }

  export const DocumentRepositoryKey = 'LightDMS/DocumentRepository';
  export interface DocumentRepository {
    ID?: string;
    Name: string;
  }

  export const UndoCheckoutKey = 'LightDMS/UndoCheckout';
  export interface UndoCheckout {
    ID?: string;
    RepositoryID?: string;
    DocumentID?: string;
    CreatedByID?: string;
    CreatedDate?: Date;
    Comment?: string;
  }

  export const OtherUserDocumentUndoCheckoutKey =
    'LightDMS/OtherUserDocumentUndoCheckout';
  export interface OtherUserDocumentUndoCheckout {}

  export const DocumentNotCheckoutedKey = 'LightDMS/DocumentNotCheckouted';
  export interface DocumentNotCheckouted {}

  export const ContentIliAzureStorageKey = 'LightDMS/ContentIliAzureStorage';
  export interface ContentIliAzureStorage {}

  export const SystemRequiredCreatedByKey = 'LightDMS/SystemRequiredCreatedBy';
  export interface SystemRequiredCreatedBy {}

  export const SystemRequiredCreatedDateKey =
    'LightDMS/SystemRequiredCreatedDate';
  export interface SystemRequiredCreatedDate {}

  export const SystemRequiredVersionNumberKey =
    'LightDMS/SystemRequiredVersionNumber';
  export interface SystemRequiredVersionNumber {}
}

export module ObradaPismena {
  export const OdlaganjeURokovnikKey = 'ObradaPismena/OdlaganjeURokovnik';
  export interface OdlaganjeURokovnik {
    ID?: string;
    DatumOdlaganja: Date;
    RokCuvanja?: Date;
    PredmetID: string;
    TemeljemPismenaID?: string;
    KorisnikID?: string;
    DatumVrijeme?: Date;
    Napomena?: string;
  }

  export const PredmetURokovnikuDocumentCheckoutKey =
    'ObradaPismena/PredmetURokovnikuDocumentCheckout';
  export interface PredmetURokovnikuDocumentCheckout {}

  export const OdlaganjeUAdActaKey = 'ObradaPismena/OdlaganjeUAdActa';
  export interface OdlaganjeUAdActa {
    ID?: string;
    Trajno?: boolean;
    DatumOdlaganja: Date;
    RokCuvanja?: Date;
    PredmetID: string;
    TemeljemPismenaID?: string;
    KorisnikID?: string;
    DatumVrijeme?: Date;
    Napomena?: string;
  }

  export const PredmetUPismohraniDocumentCheckoutKey =
    'ObradaPismena/PredmetUPismohraniDocumentCheckout';
  export interface PredmetUPismohraniDocumentCheckout {}

  export const DijeljenjePredmetaPismenaKey =
    'ObradaPismena/DijeljenjePredmetaPismena';
  export interface DijeljenjePredmetaPismena {
    ID?: string;
    PredmetID?: string;
    PismenoID?: string;
    DodaoPravaID: string;
    MaknuoPravaID?: string;
    SluzbenikID?: string;
    UstrojstvenaJedinicaID?: string;
    DatumOd?: Date;
    DatumDo?: Date;
    Napomena?: string;
    RadnoTijeloID?: string;
    Active?: boolean;
  }

  export const ValidForDijeljenjePismenaPredmetaKey =
    'ObradaPismena/ValidForDijeljenjePismenaPredmeta';
  export interface ValidForDijeljenjePismenaPredmeta {}

  export const ValidForPonistavanjeDijeljenjaPismenaPredmetaKey =
    'ObradaPismena/ValidForPonistavanjeDijeljenjaPismenaPredmeta';
  export interface ValidForPonistavanjeDijeljenjaPismenaPredmeta {}

  export const RemoveJourselfFromSuradniciKey =
    'ObradaPismena/RemoveJourselfFromSuradnici';
  export interface RemoveJourselfFromSuradnici {}

  export const PodijeliPredmetPismenoKey =
    'ObradaPismena/PodijeliPredmetPismeno';
  export interface PodijeliPredmetPismeno {
    PredmetID?: string;
    PismenoID?: string;
    Napomena?: string;
    SubjektDodjeljivanjaID?: string;
  }

  export const ZaposlenikBrojcanaOznakaKey =
    'ObradaPismena/ZaposlenikBrojcanaOznaka';
  export interface ZaposlenikBrojcanaOznaka {
    ID?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
  }

  export const DijeljenjePredmetaPismenaBrowseKey =
    'ObradaPismena/DijeljenjePredmetaPismenaBrowse';
  export interface DijeljenjePredmetaPismenaBrowse {
    ID?: string;
    Active?: boolean;
    PredmetID?: string;
    PismenoID?: string;
    DodaoPravaID?: string;
    SluzbenikID?: string;
    Napomena?: string;
    DatumOd?: Date;
    DatumDo?: Date;
    DodaoPravaNaziv?: string;
    SluzbenikNaziv?: string;
  }

  export const PonistiDijeljenjePredmetaKey =
    'ObradaPismena/PonistiDijeljenjePredmeta';
  export interface PonistiDijeljenjePredmeta {
    PredmetID?: string;
    SluzbenikID?: string;
    Napomena?: string;
  }

  export const PonistiDijeljenjePismenaKey =
    'ObradaPismena/PonistiDijeljenjePismena';
  export interface PonistiDijeljenjePismena {
    PismenoID?: string;
    SluzbenikID?: string;
    Napomena?: string;
  }

  export const UkloniSuradnikaSPredmetaIPismenaKey =
    'ObradaPismena/UkloniSuradnikaSPredmetaIPismena';
  export interface UkloniSuradnikaSPredmetaIPismena {
    SluzbenikID?: string;
    Napomena?: string;
  }

  export const InsertRezultatObradeAndNewObradaKey =
    'ObradaPismena/InsertRezultatObradeAndNewObrada';
  export interface InsertRezultatObradeAndNewObrada {
    RezultatObradeNapomena?: string;
    ZaduzeniDjelatnikIDsList?: string;
    RokZaRjesavanje?: Date;
    PismenoObradaNapomena?: string;
    PismenoObradaID: string;
    RezultatObradeID: string;
    VrstaObradeID?: string;
  }

  export const KorakObradeKey = 'ObradaPismena/KorakObrade';
  export interface KorakObrade {
    ID?: string;
    RezultatObradeID: string;
    VrstaObradeID: string;
    SljedeciKorakID: string;
    Active?: boolean;
  }

  export const UnosObrisanogZapisaKey = 'ObradaPismena/UnosObrisanogZapisa';
  export interface UnosObrisanogZapisa {}

  export const UnosDuplogZapisaKey = 'ObradaPismena/UnosDuplogZapisa';
  export interface UnosDuplogZapisa {}

  export const KorakObradeBrowseKey = 'ObradaPismena/KorakObradeBrowse';
  export interface KorakObradeBrowse {
    ID?: string;
    VrstaObradeID?: string;
    Active?: boolean;
    RezultatObradeNaziv?: string;
    SljedeciKorak?: string;
  }

  export const PismenoObradaKey = 'ObradaPismena/PismenoObrada';
  export interface PismenoObrada {
    ID?: string;
    PismenoID: string;
    KreiraoID?: string;
    ZaduzeniDjelatnikID: string;
    PredhodnaPismenoObradaID?: string;
    Kreirano?: Date;
    RokZaRjesavanje: Date;
    PotvrdaNijePotrebna?: boolean;
    Napomena?: string;
    VrstaObradeID: string;
  }

  export const TudjaObradaKey = 'ObradaPismena/TudjaObrada';
  export interface TudjaObrada {}

  export const RijesenaObradaKey = 'ObradaPismena/RijesenaObrada';
  export interface RijesenaObrada {}

  export const ValidForObradaPismenaInsertKey =
    'ObradaPismena/ValidForObradaPismenaInsert';
  export interface ValidForObradaPismenaInsert {}

  export const ValidForObradaPismenaInsert_StatusPismenaKey =
    'ObradaPismena/ValidForObradaPismenaInsert_StatusPismena';
  export interface ValidForObradaPismenaInsert_StatusPismena {}

  export const PismenoObradaPermissionsZaduzeniDjelatnikKey =
    'ObradaPismena/PismenoObradaPermissionsZaduzeniDjelatnik';
  export interface PismenoObradaPermissionsZaduzeniDjelatnik {
    ID?: string;
    ZaduzeniDjelatnikID?: string;
  }

  export const PismenoObradaPermissionsKreiraoKey =
    'ObradaPismena/PismenoObradaPermissionsKreirao';
  export interface PismenoObradaPermissionsKreirao {
    ID?: string;
    KreiraoID?: string;
  }

  export const CommputeStatusObradePismenaKey =
    'ObradaPismena/CommputeStatusObradePismena';
  export interface CommputeStatusObradePismena {
    ID?: string;
    PismenoID?: string;
    StatusObradeID?: string;
  }

  export const StatusObradePismenaKey = 'ObradaPismena/StatusObradePismena';
  export interface StatusObradePismena {
    ID?: string;
    PismenoID?: string;
    StatusObradeID?: string;
  }

  export const ZaposleniciZaDodjeluKey = 'ObradaPismena/ZaposleniciZaDodjelu';
  export interface ZaposleniciZaDodjelu {
    ID?: string;
    ImePrezime?: string;
    BrojcanaOznaka?: string;
    NazivUJNaziv?: string;
    NazivUJNazivBrojcanaOznaka?: string;
  }

  export const ZaposlenikNazivUJNazivBrojcanaOznakaQuickSearchKey =
    'ObradaPismena/ZaposlenikNazivUJNazivBrojcanaOznakaQuickSearch';
  export interface ZaposlenikNazivUJNazivBrojcanaOznakaQuickSearch {
    Pattern?: string;
  }

  export const ResolveZaduzeniDjelatnikResultKey =
    'ObradaPismena/ResolveZaduzeniDjelatnikResult';
  export interface ResolveZaduzeniDjelatnikResult {
    ZaduzeniDjelatnikId?: string;
  }

  export const ResolveZaduzeniDjelatnikKey =
    'ObradaPismena/ResolveZaduzeniDjelatnik';
  export interface ResolveZaduzeniDjelatnik {
    PrethodnaObradaId?: string;
  }

  export const ResolveSljedecaVrstaObradeResultKey =
    'ObradaPismena/ResolveSljedecaVrstaObradeResult';
  export interface ResolveSljedecaVrstaObradeResult {
    VrstaObradeId?: string;
  }

  export const ResolveSljedecaVrstaObradeKey =
    'ObradaPismena/ResolveSljedecaVrstaObrade';
  export interface ResolveSljedecaVrstaObrade {
    PrethodnaObradaId?: string;
    RezultatObradeID?: string;
  }

  export const PismenoObradaBrisanjeKey = 'ObradaPismena/PismenoObradaBrisanje';
  export interface PismenoObradaBrisanje {
    ID?: string;
    KorisnikID?: string;
    DatumVrijeme?: Date;
    Napomena?: string;
  }

  export const OvlastenjeZaObraduPismenaKey =
    'ObradaPismena/OvlastenjeZaObraduPismena';
  export interface OvlastenjeZaObraduPismena {
    ID?: string;
    SluzbenikID: string;
    OvlastenikID: string;
    OvlastioID: string;
    VrijediOd: Date;
    VrijediDo?: Date;
    SamoObradeURazdoblju?: boolean;
    Active?: boolean;
  }

  export const UniqueItemKey = 'ObradaPismena/UniqueItem';
  export interface UniqueItem {}

  export const OvlastenjeZaObraduPismenaBrowseBaseKey =
    'ObradaPismena/OvlastenjeZaObraduPismenaBrowseBase';
  export interface OvlastenjeZaObraduPismenaBrowseBase {
    ID?: string;
    IsValid?: boolean;
  }

  export const OvlastenjeZaObraduPismenaBrowseKey =
    'ObradaPismena/OvlastenjeZaObraduPismenaBrowse';
  export interface OvlastenjeZaObraduPismenaBrowse {
    ID?: string;
    Active?: boolean;
    SluzbenikID?: string;
    OvlastenikID?: string;
    OvlastioID?: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    SamoObradeURazdoblju?: boolean;
    SluzbenikNaziv?: string;
    SluzbenikNazivUJNazivBrojcanaOznaka?: string;
    OvlastenikNaziv?: string;
    OvlastenikNazivUJNazivBrojcanaOznaka?: string;
    OvlastioNaziv?: string;
    OvlastioNazivUJNazivBrojcanaOznaka?: string;
    SluzbenikUstrojstvenaJedinicaID?: string;
    SluzbenikUstrojstvenaJedinicaRadomUpravljaID?: string;
    IsValid?: boolean;
  }

  export const OvlastenjeZaObraduPismenaActiveKey =
    'ObradaPismena/OvlastenjeZaObraduPismenaActive';
  export interface OvlastenjeZaObraduPismenaActive {
    ID?: string;
    SluzbenikID?: string;
    OvlastenikID?: string;
    OvlastioID?: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    SamoObradeURazdoblju?: boolean;
  }

  export const PismenoFiksniDioKlaseKey = 'ObradaPismena/PismenoFiksniDioKlase';
  export interface PismenoFiksniDioKlase {
    ID?: string;
    FiksniDioKlase?: string;
    FiksniDioKlaseDosjeaID?: string;
  }

  export const PismenoObradaBrowseFilterKey =
    'ObradaPismena/PismenoObradaBrowseFilter';
  export interface PismenoObradaBrowseFilter {
    KreiranoOd?: Date;
    KreiranoDo?: Date;
    PredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
    ObraduKreiraoIds?: string;
    ObraduRjesioObrisaoIds?: string;
    ZaduzenDjelatnikIds?: string;
    RokZaRjesavanjeOd?: Date;
    RokZaRjesavanjeDo?: Date;
    VrstaObradeIds?: string;
    Napomena?: string;
    StatusObradeIds?: string;
    DatumRjesavanjaOd?: Date;
    DatumRjesavanjaDo?: Date;
    RezultatObradeIds?: string;
    NapomenaOBrisanjuRjesavnju?: string;
    Pattern?: string;
  }

  export const PismenoObradaBrowseKey = 'ObradaPismena/PismenoObradaBrowse';
  export interface PismenoObradaBrowse {
    ID?: string;
    Kreirano?: Date;
    RokZaRjesavanje?: Date;
    PotvrdaNijePotrebna?: boolean;
    Napomena?: string;
    PismenoID?: string;
    EntityID?: string;
    PredmetPosebnaOznakaKlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    PismenoNaziv?: string;
    VrstaObradeID?: string;
    VrstaObradeNaziv?: string;
    KreiraoID?: string;
    ObraduKreirao?: string;
    ZaduzenDjelatnikID?: string;
    ZaduzenDjelatnik?: string;
    Rezultat?: string;
    DatumRjesavanja?: Date;
    NapomenaOBrisanjuRjesavnju?: string;
    ImePrezime?: string;
    ZaposlenikRjesioObrisaoID?: string;
    HasObradaIstogPismena?: number;
    StatusObradeID?: string;
    StatusObrade?: string;
  }

  export const ZaduzeneObradePismenaKey = 'ObradaPismena/ZaduzeneObradePismena';
  export interface ZaduzeneObradePismena {}

  export const KreiraneObradePismenaKey = 'ObradaPismena/KreiraneObradePismena';
  export interface KreiraneObradePismena {}

  export const PocetneObradePismenaKey = 'ObradaPismena/PocetneObradePismena';
  export interface PocetneObradePismena {}

  export const AktivneObradeKey = 'ObradaPismena/AktivneObrade';
  export interface AktivneObrade {}

  export const CekaRjesavanjeFilterKey = 'ObradaPismena/CekaRjesavanjeFilter';
  export interface CekaRjesavanjeFilter {}

  export const FilterByStatusObradeKey = 'ObradaPismena/FilterByStatusObrade';
  export interface FilterByStatusObrade {
    ShowStatusPonistena?: boolean;
    ShowStatusCekaRjesavanje?: boolean;
    ShowStatusRijesena?: boolean;
  }

  export const PismenoObradaNapomenaBrisanjeRjesavanjeKey =
    'ObradaPismena/PismenoObradaNapomenaBrisanjeRjesavanje';
  export interface PismenoObradaNapomenaBrisanjeRjesavanje {
    ID?: string;
    Napomena?: string;
    ImePrezime?: string;
    ZaposlenikID?: string;
  }

  export const PismenoObradaDetailKey = 'ObradaPismena/PismenoObradaDetail';
  export interface PismenoObradaDetail {
    ID?: string;
    PismenoID?: string;
    PismenoObradaID?: string;
    Kreirano?: Date;
    VrstaObradeNaziv?: string;
    Napomena?: string;
    ObraduKreirao?: string;
    ZaduzenDjelatnik?: string;
    RokZaRjesavanje?: Date;
    StatusObrade?: string;
    DatumRjesavanja?: Date;
    Rezultat?: string;
    NapomenaOBrisanjuRjesavnju?: string;
    ImePrezime?: string;
    VrstaObradeID?: string;
  }

  export const PismenoObradaDetailBrowseKey =
    'ObradaPismena/PismenoObradaDetailBrowse';
  export interface PismenoObradaDetailBrowse {
    ID?: string;
    PismenoObradaID?: string;
    PismenoID?: string;
    VrstaObradeNaziv?: string;
    Napomena?: string;
    Kreirano?: Date;
    ObraduKreirao?: string;
    ZaduzenDjelatnik?: string;
    RokZaRjesavanje?: Date;
    StatusObrade?: string;
    DatumRjesavanja?: Date;
    Rezultat?: string;
    NapomenaOBrisanjuRjesavnju?: string;
    ImePrezime?: string;
    VrstaObradeID?: string;
  }

  export const PismenoObradaObradeIstogPismenaKey =
    'ObradaPismena/PismenoObradaObradeIstogPismena';
  export interface PismenoObradaObradeIstogPismena {
    ID?: string;
    ObradaID?: string;
    Kreirano?: Date;
    VrstaObradeNaziv?: string;
    Napomena?: string;
    ObraduKreirao?: string;
    ZaduzenDjelatnik?: string;
    RokZaRjesavanje?: Date;
    StatusObradeNaziv?: string;
    RezultatObradeNaziv?: string;
    NapomenaOBrisanjuRjesavnju?: string;
  }

  export const PismenoObradaObradeIstogPismenaBrowseKey =
    'ObradaPismena/PismenoObradaObradeIstogPismenaBrowse';
  export interface PismenoObradaObradeIstogPismenaBrowse {
    ID?: string;
    ObradaID?: string;
    Kreirano?: Date;
    VrstaObradeNaziv?: string;
    Napomena?: string;
    ObraduKreirao?: string;
    ZaduzenDjelatnik?: string;
    RokZaRjesavanje?: Date;
    StatusObradeNaziv?: string;
    RezultatObradeNaziv?: string;
    NapomenaOBrisanjuRjesavnju?: string;
  }

  export const PismenoObradaIstogPismenaDetailCountKey =
    'ObradaPismena/PismenoObradaIstogPismenaDetailCount';
  export interface PismenoObradaIstogPismenaDetailCount {
    ID?: string;
    HasObradaIstogPismena?: number;
  }

  export const ComputePravoNaPismenoPrekoObradeOvlastenjaKey =
    'ObradaPismena/ComputePravoNaPismenoPrekoObradeOvlastenja';
  export interface ComputePravoNaPismenoPrekoObradeOvlastenja {
    ID?: string;
    ZaposlenikID?: string;
    PismenoID?: string;
  }

  export const PravoNaPismenoPrekoObradeOvlastenjaKey =
    'ObradaPismena/PravoNaPismenoPrekoObradeOvlastenja';
  export interface PravoNaPismenoPrekoObradeOvlastenja {
    ID?: string;
    ZaposlenikID?: string;
    PismenoID?: string;
  }

  export const RezultatObradeKey = 'ObradaPismena/RezultatObrade';
  export interface RezultatObrade {
    ID?: string;
    Naziv?: string;
    Potvrdjena?: boolean;
    Odbijena?: boolean;
  }

  export const RezultatObradeSljedeciKorakRequiredKey =
    'ObradaPismena/RezultatObradeSljedeciKorakRequired';
  export interface RezultatObradeSljedeciKorakRequired {
    ID?: string;
    Naziv?: string;
    SljedeciKorakObvezan?: boolean;
    SljedeciKorakPostoji?: boolean;
  }

  export const RezultatObradeSljedeciKorakRequiredGetKey =
    'ObradaPismena/RezultatObradeSljedeciKorakRequiredGet';
  export interface RezultatObradeSljedeciKorakRequiredGet {
    PismenoObradaID?: string;
    RezultatObradeID?: string;
  }

  export const RezultatObradePismenaKey = 'ObradaPismena/RezultatObradePismena';
  export interface RezultatObradePismena {
    ID?: string;
    KreiraoID?: string;
    RezultatObradeID: string;
    Napomena?: string;
    DatumRjesavanja?: Date;
  }

  export const RjesavanjeTudjihObradaKey =
    'ObradaPismena/RjesavanjeTudjihObrada';
  export interface RjesavanjeTudjihObrada {}

  export const SljedeciKorakObradeObavezanKey =
    'ObradaPismena/SljedeciKorakObradeObavezan';
  export interface SljedeciKorakObradeObavezan {}

  export const ValidForRezultatObradaPismenaKey =
    'ObradaPismena/ValidForRezultatObradaPismena';
  export interface ValidForRezultatObradaPismena {}

  export const ValidForRezultatObradaPismena_StatusPismenaKey =
    'ObradaPismena/ValidForRezultatObradaPismena_StatusPismena';
  export interface ValidForRezultatObradaPismena_StatusPismena {}

  export const StatusObradeKey = 'ObradaPismena/StatusObrade';
  export interface StatusObrade {
    ID?: string;
    Naziv?: string;
    CekaRjesavanje?: boolean;
    Rijesena?: boolean;
    Ponistena?: boolean;
  }

  export const StatusObradeSmartSearchKey =
    'ObradaPismena/StatusObradeSmartSearch';
  export interface StatusObradeSmartSearch {
    Pattern?: string;
  }

  export const VrstaObradeKey = 'ObradaPismena/VrstaObrade';
  export interface VrstaObrade {
    ID?: string;
    Active?: boolean;
    Naziv: string;
    BrojDanaZaRjesavanje?: number;
    MozeBitiPrviKorak?: boolean;
    ZaduzeniDjelatnikJeHijerarhijskiNadredjeniVoditelj?: boolean;
    PotvrdaNijePotrebna?: boolean;
    SljedeciKorakObvezan?: boolean;
    StatusPismenaZaPostavitiID?: string;
  }

  export const SljedeciKorakObvezanKorakVrsteMustExistKey =
    'ObradaPismena/SljedeciKorakObvezanKorakVrsteMustExist';
  export interface SljedeciKorakObvezanKorakVrsteMustExist {}

  export const VrsteDostupneNaPismenuKey =
    'ObradaPismena/VrsteDostupneNaPismenu';
  export interface VrsteDostupneNaPismenu {
    PismenoID?: string;
    PismenoIDs?: string;
  }

  export const SljedeciKoraciVrsteObradeKey =
    'ObradaPismena/SljedeciKoraciVrsteObrade';
  export interface SljedeciKoraciVrsteObrade {
    PismenoObradaID?: string;
    RezultatObradeID?: string;
  }

  export const VrstaObradeBrowseKey = 'ObradaPismena/VrstaObradeBrowse';
  export interface VrstaObradeBrowse {
    ID?: string;
    Naziv?: string;
    BrojDanaZaRjesavanje?: number;
    PotvrdaNijePotrebna?: boolean;
    SljedeciKorakObvezan?: boolean;
    MozeBitiPrviKorak?: boolean;
    ZaduzeniDjelatnikJeHijerarhijskiNadredjeniVoditelj?: boolean;
    Active?: boolean;
    KlasifikacijskeOznake?: string;
    StatusPismenaZaPostavitiNaziv?: string;
  }

  export const VrstaObradeExtendedKey = 'ObradaPismena/VrstaObradeExtended';
  export interface VrstaObradeExtended {
    ID?: string;
    KlasifikacijskeOznake?: string;
  }

  export const VrstaObradeGlobalnoDostupnaKey =
    'ObradaPismena/VrstaObradeGlobalnoDostupna';
  export interface VrstaObradeGlobalnoDostupna {
    ID?: string;
    Naziv?: string;
    BrojDanaZaRjesavanje?: number;
    PotvrdaNijePotrebna?: boolean;
  }

  export const VrstaObradeNaPismenuKey = 'ObradaPismena/VrstaObradeNaPismenu';
  export interface VrstaObradeNaPismenu {
    PismenoID?: string;
    VrstaObradeID?: string;
    Subtype?: string;
    VrstaObradeNaPismenuCoreID?: string;
  }

  export const VrstaObradeNaPismenuCoreKey =
    'ObradaPismena/VrstaObradeNaPismenuCore';
  export interface VrstaObradeNaPismenuCore {
    ID?: string;
    PismenoID?: string;
    VrstaObradeID?: string;
  }

  export const ValidForOdlaganjeUAdActaKey =
    'ObradaPismena/ValidForOdlaganjeUAdActa';
  export interface ValidForOdlaganjeUAdActa {}

  export const ValidForOdlaganjeURokovnikKey =
    'ObradaPismena/ValidForOdlaganjeURokovnik';
  export interface ValidForOdlaganjeURokovnik {}

  export const ZabranaOdlaganjaURokPredmetaSaIstimRokomKey =
    'ObradaPismena/ZabranaOdlaganjaURokPredmetaSaIstimRokom';
  export interface ZabranaOdlaganjaURokPredmetaSaIstimRokom {}

  export const UpsertPredmetGrupnoRazvodjenjeKey =
    'ObradaPismena/UpsertPredmetGrupnoRazvodjenje';
  export interface UpsertPredmetGrupnoRazvodjenje {
    PredmetIDs: string;
    Trajno: boolean;
    DatumOdlaganja: Date;
    RokCuvanja?: Date;
    OznakaID: string;
    TemeljemNovogPismena?: boolean;
  }

  export const UpsertPredmetRazvodjenjeKey =
    'ObradaPismena/UpsertPredmetRazvodjenje';
  export interface UpsertPredmetRazvodjenje {
    PredmetID: string;
    PismenoID?: string;
    Trajno?: boolean;
    DatumOdlaganja: Date;
    RokCuvanja?: Date;
    OznakaID: string;
    TemeljemNovogPismena?: boolean;
    Napomena?: string;
  }

  export const OznakaRazvodjenjaKey = 'ObradaPismena/OznakaRazvodjenja';
  export interface OznakaRazvodjenja {
    ID?: string;
    Oznaka: string;
    Opis?: string;
    IsVracanjeURad: boolean;
    IsOdlaganjeUPismohranu: boolean;
    IsOdlaganjeURokovnik: boolean;
    DozvoliDodavanjePismena: boolean;
  }

  export const OznakaRazvodjenjaLookupKey =
    'ObradaPismena/OznakaRazvodjenjaLookup';
  export interface OznakaRazvodjenjaLookup {
    ID?: string;
    Oznaka?: string;
    Opis?: string;
  }

  export const OznakaRazvodjenjaExcludeVracanjeLookupFilterKey =
    'ObradaPismena/OznakaRazvodjenjaExcludeVracanjeLookupFilter';
  export interface OznakaRazvodjenjaExcludeVracanjeLookupFilter {}

  export const InsertVracanjeURadKey = 'ObradaPismena/InsertVracanjeURad';
  export interface InsertVracanjeURad {
    PredmetID?: string;
    PismenoID?: string;
    DatumVracanjaURad?: Date;
    Napomena?: string;
    ForceOdlaganjeURokovnik?: boolean;
  }

  export const UpsertPredmetVracanjeURadKey =
    'ObradaPismena/UpsertPredmetVracanjeURad';
  export interface UpsertPredmetVracanjeURad {
    PredmetID: string;
    PismenoID?: string;
    UNadleznostiID: string;
    Napomena?: string;
    ForceOdlaganjeURokovnik?: boolean;
  }

  export const VracanjeURadIzAdActaKey = 'ObradaPismena/VracanjeURadIzAdActa';
  export interface VracanjeURadIzAdActa {
    ID?: string;
    DatumVracanjaURad: Date;
    PredmetID: string;
    TemeljemPismenaID?: string;
    KorisnikID?: string;
    DatumVrijeme?: Date;
    Napomena?: string;
  }

  export const ValidForVracanjeURadIzAdActaKey =
    'ObradaPismena/ValidForVracanjeURadIzAdActa';
  export interface ValidForVracanjeURadIzAdActa {}

  export const VracanjeURadIzRokovnikaKey =
    'ObradaPismena/VracanjeURadIzRokovnika';
  export interface VracanjeURadIzRokovnika {
    ID?: string;
    DatumVracanjaURad: Date;
    PredmetID: string;
    TemeljemPismenaID?: string;
    KorisnikID?: string;
    DatumVrijeme?: Date;
    Napomena?: string;
  }

  export const ValidForVracanjeURadIzRokovnikaKey =
    'ObradaPismena/ValidForVracanjeURadIzRokovnika';
  export interface ValidForVracanjeURadIzRokovnika {}

  export const VrstaObradeFiksniDioKlaseUpravnostDosjeKey =
    'ObradaPismena/VrstaObradeFiksniDioKlaseUpravnostDosje';
  export interface VrstaObradeFiksniDioKlaseUpravnostDosje {
    ID?: string;
    VrstaObradeID?: string;
    FiksniDioKlaseUpravnostDosjeID?: string;
  }

  export const MergeVrstaObradeFiksniDioKlaseUpravnostDosjeKey =
    'ObradaPismena/MergeVrstaObradeFiksniDioKlaseUpravnostDosje';
  export interface MergeVrstaObradeFiksniDioKlaseUpravnostDosje {
    VrstaObradeID?: string;
    FiksniDioKlaseUpravnostDosjeIDs?: string;
  }

  export const DatumOdlaganja_MaxValueFilterKey =
    'ObradaPismena/DatumOdlaganja_MaxValueFilter';
  export interface DatumOdlaganja_MaxValueFilter {}

  export const RokCuvanja_MaxValueFilterKey =
    'ObradaPismena/RokCuvanja_MaxValueFilter';
  export interface RokCuvanja_MaxValueFilter {}

  export const DatumVracanjaURad_MaxValueFilterKey =
    'ObradaPismena/DatumVracanjaURad_MaxValueFilter';
  export interface DatumVracanjaURad_MaxValueFilter {}

  export const BrojDanaZaRjesavanje_MinValueFilterKey =
    'ObradaPismena/BrojDanaZaRjesavanje_MinValueFilter';
  export interface BrojDanaZaRjesavanje_MinValueFilter {}

  export const DijeljenjeBezPredmetaIPismenaKey =
    'ObradaPismena/DijeljenjeBezPredmetaIPismena';
  export interface DijeljenjeBezPredmetaIPismena {}

  export const OdbacitiDijeljenjeVezanogPredmetaKey =
    'ObradaPismena/OdbacitiDijeljenjeVezanogPredmeta';
  export interface OdbacitiDijeljenjeVezanogPredmeta {}

  export const OdbacitiPonistenjeDijeljenjaVezanogPredmetaKey =
    'ObradaPismena/OdbacitiPonistenjeDijeljenjaVezanogPredmeta';
  export interface OdbacitiPonistenjeDijeljenjaVezanogPredmeta {}

  export const ValidForDijeljenjePismenaPredmetaZaPismenoKey =
    'ObradaPismena/ValidForDijeljenjePismenaPredmetaZaPismeno';
  export interface ValidForDijeljenjePismenaPredmetaZaPismeno {}

  export const ValidForPonistavanjeDijeljenjaPismenaPredmetaZaPismenoKey =
    'ObradaPismena/ValidForPonistavanjeDijeljenjaPismenaPredmetaZaPismeno';
  export interface ValidForPonistavanjeDijeljenjaPismenaPredmetaZaPismeno {}

  export const OnemogucitiObraduUkolikoJePismenoObrisanoKey =
    'ObradaPismena/OnemogucitiObraduUkolikoJePismenoObrisano';
  export interface OnemogucitiObraduUkolikoJePismenoObrisano {}

  export const BrisanjeRjeseneObradeKey = 'ObradaPismena/BrisanjeRjeseneObrade';
  export interface BrisanjeRjeseneObrade {}

  export const ProvjeraVrijediDoKey = 'ObradaPismena/ProvjeraVrijediDo';
  export interface ProvjeraVrijediDo {}

  export const DeaktiviranaObradaKey = 'ObradaPismena/DeaktiviranaObrada';
  export interface DeaktiviranaObrada {}

  export const SljedeciKorakObvezanIPotvrdaNijePotrebnaKey =
    'ObradaPismena/SljedeciKorakObvezanIPotvrdaNijePotrebna';
  export interface SljedeciKorakObvezanIPotvrdaNijePotrebna {}

  export const OdlaganjeUPismohranuTemeljemBrisanogPismenaKey =
    'ObradaPismena/OdlaganjeUPismohranuTemeljemBrisanogPismena';
  export interface OdlaganjeUPismohranuTemeljemBrisanogPismena {}

  export const OdlaganjeURokovnikTemeljemBrisanogPismenaKey =
    'ObradaPismena/OdlaganjeURokovnikTemeljemBrisanogPismena';
  export interface OdlaganjeURokovnikTemeljemBrisanogPismena {}

  export const VracanjeURadIzAdActaTemeljemBrisanogPismenaKey =
    'ObradaPismena/VracanjeURadIzAdActaTemeljemBrisanogPismena';
  export interface VracanjeURadIzAdActaTemeljemBrisanogPismena {}

  export const VracanjeURadIzRokovnikaTemeljemBrisanogPismenaKey =
    'ObradaPismena/VracanjeURadIzRokovnikaTemeljemBrisanogPismena';
  export interface VracanjeURadIzRokovnikaTemeljemBrisanogPismena {}

  export const InvalidStupanjTajnostiKey =
    'ObradaPismena/InvalidStupanjTajnosti';
  export interface InvalidStupanjTajnosti {}

  export const InvalidStupanjTajnostiPredmetKey =
    'ObradaPismena/InvalidStupanjTajnostiPredmet';
  export interface InvalidStupanjTajnostiPredmet {}

  export const InvalidStupanjTajnostiPismenoKey =
    'ObradaPismena/InvalidStupanjTajnostiPismeno';
  export interface InvalidStupanjTajnostiPismeno {}

  export const SystemRequiredDatumOdKey = 'ObradaPismena/SystemRequiredDatumOd';
  export interface SystemRequiredDatumOd {}

  export const SystemRequiredKreiraoKey = 'ObradaPismena/SystemRequiredKreirao';
  export interface SystemRequiredKreirao {}

  export const SystemRequiredDatumVrijemeKey =
    'ObradaPismena/SystemRequiredDatumVrijeme';
  export interface SystemRequiredDatumVrijeme {}

  export const SystemRequiredDatumRjesavanjaKey =
    'ObradaPismena/SystemRequiredDatumRjesavanja';
  export interface SystemRequiredDatumRjesavanja {}

  export const SystemRequiredActiveKey = 'ObradaPismena/SystemRequiredActive';
  export interface SystemRequiredActive {}
}

export module CmisDms {
  export const PredmetInfoKey = 'CmisDms/PredmetInfo';
  export interface PredmetInfo {
    ID?: string;
    FolderPath?: string;
    DmsFolderID?: string;
    Klasa?: string;
  }

  export const PismenoPrilogInfoKey = 'CmisDms/PismenoPrilogInfo';
  export interface PismenoPrilogInfo {
    ID?: string;
    PredmetID?: string;
    FileName?: string;
    FolderPath?: string;
    DmsDocumentID?: string;
    DmsFolderID?: string;
    Barkod?: string;
    DatumNastanka?: Date;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    TipZapisa?: string;
  }

  export const PredmetDmsMapKey = 'CmisDms/PredmetDmsMap';
  export interface PredmetDmsMap {
    ID?: string;
    DmsFolderID?: string;
  }

  export const PismenoPrilogDmsMapKey = 'CmisDms/PismenoPrilogDmsMap';
  export interface PismenoPrilogDmsMap {
    ID?: string;
    DmsDocumentID?: string;
    CurrentFileExtension?: string;
    CurrentVersion?: number;
    CurrentVersionIsScan?: boolean;
  }

  export const DmsDocumentForOcrKey = 'CmisDms/DmsDocumentForOcr';
  export interface DmsDocumentForOcr {
    ID?: string;
    DocumentID?: string;
    DocumentVersion?: number;
    KlasifikacijskaOznaka?: string;
    NazivPredmeta?: string;
    UrudzbeniBroj?: string;
    NazivPismena?: string;
    PrilogPismeno?: string;
  }

  export const DmsUserInfoKey = 'CmisDms/DmsUserInfo';
  export interface DmsUserInfo {
    ID?: string;
    UserName?: string;
    DisplayName?: string;
  }

  export const DocumentVersionInfoKey = 'CmisDms/DocumentVersionInfo';
  export interface DocumentVersionInfo {
    ID?: string;
    DocumentID: string;
    CreatedDate?: Date;
    KorisnikID?: string;
    Version: number;
    Comment?: string;
  }

  export const CheckDmsActionPermissionKey = 'CmisDms/CheckDmsActionPermission';
  export interface CheckDmsActionPermission {
    DocumentID?: string;
    ActionType?: string;
  }
}

export module DostavaURad {
  export const DodjelaURadKey = 'DostavaURad/DodjelaURad';
  export interface DodjelaURad {
    ID?: string;
    PredmetID: string;
    KreiraoID: string;
    SluzbenikID: string;
    DatumKreiranja?: Date;
    SistemskiDatumKreiranja?: Date;
    TemeljemGlavnogPredmeta?: boolean;
  }

  export const ValidForDodjelaURadKey = 'DostavaURad/ValidForDodjelaURad';
  export interface ValidForDodjelaURad {}

  export const DostupanPredmetKey = 'DostavaURad/DostupanPredmet';
  export interface DostupanPredmet {}

  export const UpsertDodjelaURadKey = 'DostavaURad/UpsertDodjelaURad';
  export interface UpsertDodjelaURad {
    DodjelaURad: string;
    AllowDelegiranjeOnSameSluzbenik?: boolean;
  }

  export const PredmetiZaDodjeluURadKey = 'DostavaURad/PredmetiZaDodjeluURad';
  export interface PredmetiZaDodjeluURad {
    ID?: string;
    GlavniPredmetID?: string;
    Active?: boolean;
    PredmetNaziv?: string;
    PosebnaOznakaKlasifikacijskaOznaka?: string;
    UNadleznostiNaziv?: string;
    UstrojstvenaJedinicaNaziv?: string;
    NazivUstrojstvenaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
    UNadleznostiID?: string;
  }

  export const PredmetiIzPopisaKey = 'DostavaURad/PredmetiIzPopisa';
  export interface PredmetiIzPopisa {
    IDs?: string;
  }

  export const DostavaDrugomTijeluKey = 'DostavaURad/DostavaDrugomTijelu';
  export interface DostavaDrugomTijelu {
    ID?: string;
    PredmetID: string;
    KreiraoID: string;
    Napomena?: string;
    DrugoTijeloID: string;
    DatumKreiranja?: Date;
  }

  export const ValidForDostavaDrugomTijeluKey =
    'DostavaURad/ValidForDostavaDrugomTijelu';
  export interface ValidForDostavaDrugomTijelu {}

  export const DostavaDrugomTijeluBrowseKey =
    'DostavaURad/DostavaDrugomTijeluBrowse';
  export interface DostavaDrugomTijeluBrowse {
    ID?: string;
    PredmetID?: string;
    DrugoTijeloID?: string;
    KreiraoID?: string;
    DatumKreiranja?: Date;
    DrugoTijeloNaziv?: string;
  }

  export const UpsertDostavaDrugomTijeluKey =
    'DostavaURad/UpsertDostavaDrugomTijelu';
  export interface UpsertDostavaDrugomTijelu {
    DostavaDrugomTijelu: string;
  }

  export const InternaDostavnaKnjigaBrowseSearchKey =
    'DostavaURad/InternaDostavnaKnjigaBrowseSearch';
  export interface InternaDostavnaKnjigaBrowseSearch {
    Pattern?: string;
    DatumZahtjevaOd?: Date;
    DatumZahtjevaDo?: Date;
    KlasifikacijskaOznaka?: string;
    KlasifikacijskaOznakaDo?: number;
    UrudzbeniBroj?: string;
    NazivPredmeta?: string;
    NazivPismena?: string;
    ZahtjevKreirao?: string;
    ZahtjevZa?: string;
    RazlogIDs?: string;
    DatumPotvrdePrimitkaOd?: Date;
    DatumPotvrdePrimitkaDo?: Date;
    PrimitakPotvrdio?: string;
    DatumVracanjaUPisarnicuOd?: Date;
    DatumVracanjaUPisarnicuDo?: Date;
    VratioUPisarnicu?: string;
    Page?: number;
    PageSize?: number;
    SortField?: string;
    SortDescending?: boolean;
  }

  export const PismenaZaPotvrduPrimitkaBrowseSearchKey =
    'DostavaURad/PismenaZaPotvrduPrimitkaBrowseSearch';
  export interface PismenaZaPotvrduPrimitkaBrowseSearch {
    Pattern?: string;
    DatumZahtjevaOd?: Date;
    DatumZahtjevaDo?: Date;
    KlasifikacijskaOznaka?: string;
    KlasifikacijskaOznakaDo?: number;
    UrudzbeniBroj?: string;
    NazivPredmeta?: string;
    NazivPismena?: string;
    ZahtjevKreirao?: string;
    ZahtjevZa?: string;
    RazlogIDs?: string;
    DatumPotvrdePrimitkaOd?: Date;
    DatumPotvrdePrimitkaDo?: Date;
    PrimitakPotvrdio?: string;
    Page?: number;
    PageSize?: number;
    SortField?: string;
    SortDescending?: boolean;
  }

  export const RazlogZahtjevaZaPotvrdomPrimitkaKey =
    'DostavaURad/RazlogZahtjevaZaPotvrdomPrimitka';
  export interface RazlogZahtjevaZaPotvrdomPrimitka {
    ID?: string;
    Naziv: string;
    StatusPismenaZaPostavitiID?: string;
    VracanjePisarnici?: boolean;
    RasporedjivanjePredmeta?: boolean;
    UstupanjePredmeta?: boolean;
    DodjelaPredmetaURad?: boolean;
    ZdruzivanjePostojecemPredmetu?: boolean;
    RucnoDefinirano?: boolean;
    OtvaranjePredmeta?: boolean;
  }

  export const RazlogZahtjevaZaPotvrdomPrimitkaBrowseKey =
    'DostavaURad/RazlogZahtjevaZaPotvrdomPrimitkaBrowse';
  export interface RazlogZahtjevaZaPotvrdomPrimitkaBrowse {
    ID?: string;
    Naziv?: string;
    StatusPismenaKodPotvrde?: string;
  }

  export const OvlasteniZaPotvrduPrimitkaKey =
    'DostavaURad/OvlasteniZaPotvrduPrimitka';
  export interface OvlasteniZaPotvrduPrimitka {
    ID?: string;
    SluzbenikID: string;
    OvlastenikID: string;
    OvlastioID: string;
    Active?: boolean;
  }

  export const ZahtjevZaPotvrdomPrimitkaKey =
    'DostavaURad/ZahtjevZaPotvrdomPrimitka';
  export interface ZahtjevZaPotvrdomPrimitka {
    ID?: string;
    KreiraoID: string;
    PismenoID: string;
    PredmetID: string;
    RazlogID?: string;
    DatumKreiranja?: Date;
    TemeljemGlavnogPredmeta?: boolean;
    ZahtjevZaID: string;
  }

  export const PotvrdaPrimitkaKey = 'DostavaURad/PotvrdaPrimitka';
  export interface PotvrdaPrimitka {
    ID?: string;
    PotvrdioPrimitakID: string;
    PismenoID: string;
    ZahtjevZaPotvrdomPrimitkaID?: string;
    NapomenaUzPotvrduPrimitka?: string;
    DatumPotvrdePrimitka?: Date;
  }

  export const InternaDostavnaKnjigaKey = 'DostavaURad/InternaDostavnaKnjiga';
  export interface InternaDostavnaKnjiga {
    ID?: string;
    ZahtjevID?: string;
    PotvrdaPrimitkaID?: string;
    ZatrazioPotvrduPrimitkaBrOznakaNazivUJNaziv?: string;
    ZatrazioPotvrduPrimitkaID?: string;
    ZatrazioPotvrduPrimitkaOdBrOznakaNazivUJNaziv?: string;
    PotvrdioPrimitakID?: string;
    VratioUPisarnicuID?: string;
    PotvrdioPrimitakBrOznakaNazivUJNaziv?: string;
    VratioUPisarnicuBrOznakaNazivUJNaziv?: string;
    PismenoID?: string;
    PismenoPredmetKlasifikacijskaOznaka?: string;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    PredmetNaziv?: string;
    PredmetID?: string;
    RazlogID?: string;
    RazlogNaziv?: string;
    DatumPotvrdePrimitka?: Date;
    NapomenaUzPotvrduPrimitka?: string;
    DatumVracanjaUPisarnicu?: Date;
    RazlogVracanjaUPisarnicu?: string;
    DatumZahtjeva?: Date;
    DatumZadnjeAktivnosti?: Date;
    VracanjeUPisarnicuID?: string;
    ZatrazioPotvrduPrimitkaOdID?: string;
  }

  export const InternaDostavnaKnjigaBrowseKey =
    'DostavaURad/InternaDostavnaKnjigaBrowse';
  export interface InternaDostavnaKnjigaBrowse {
    ID?: string;
    ZahtjevID?: string;
    PotvrdaPrimitkaID?: string;
    PotvrdioPrimitakID?: string;
    VratioUPisarnicuID?: string;
    ZatrazioPotvrduPrimitkaID?: string;
    ZatrazioPotvrduPrimitkaOdID?: string;
    PismenoID?: string;
    RazlogID?: string;
    ZatrazioPotvrduPrimitkaBrOznakaNazivUJNaziv?: string;
    PismenoPredmetKlasifikacijskaOznaka?: string;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    PredmetNaziv?: string;
    PredmetID?: string;
    DatumZahtjeva?: Date;
    ZatrazioPotvrduPrimitkaOdBrOznakaNazivUJNaziv?: string;
    RazlogNaziv?: string;
    PotvrdioPrimitakBrOznakaNazivUJNaziv?: string;
    VratioUPisarnicuBrOznakaNazivUJNaziv?: string;
    DatumPotvrdePrimitka?: Date;
    NapomenaUzPotvrduPrimitka?: string;
    DatumVracanjaUPisarnicu?: Date;
    RazlogVracanjaUPisarnicu?: string;
  }

  export const ZaposlenikDostavaURadExtendedKey =
    'DostavaURad/ZaposlenikDostavaURadExtended';
  export interface ZaposlenikDostavaURadExtended {
    ID?: string;
    ImePrezime?: string;
    BrojcanaOznaka?: string;
    NazivUJNaziv?: string;
    NazivUJNazivBrojcanaOznaka?: string;
    UstrojstvenaJedinicaID?: string;
    RadomUpravljaID?: string;
  }

  export const InternaDostavnaKnjigaPismenoNazivFilterKey =
    'DostavaURad/InternaDostavnaKnjigaPismenoNazivFilter';
  export interface InternaDostavnaKnjigaPismenoNazivFilter {
    Pattern?: string;
  }

  export const InternaDostavnaKnjigaSamoAktivnaPismenaFilterKey =
    'DostavaURad/InternaDostavnaKnjigaSamoAktivnaPismenaFilter';
  export interface InternaDostavnaKnjigaSamoAktivnaPismenaFilter {}

  export const OvlasteniZaPotvrduPrimitkaBrowseKey =
    'DostavaURad/OvlasteniZaPotvrduPrimitkaBrowse';
  export interface OvlasteniZaPotvrduPrimitkaBrowse {
    ID?: string;
    Active?: boolean;
    SluzbenikID?: string;
    OvlastenikID?: string;
    OvlastioID?: string;
    SluzbenikNaziv?: string;
    SluzbenikNazivUJNazivBrojcanaOznaka?: string;
    OvlastenikNaziv?: string;
    OvlastenikNazivUJNazivBrojcanaOznaka?: string;
    OvlastioNaziv?: string;
    OvlastioNazivUJNazivBrojcanaOznaka?: string;
    SluzbenikUstrojstvenaJedinicaID?: string;
    SluzbenikUstrojstvenaJedinicaRadomUpravljaID?: string;
  }

  export const PismenaZaPotvrduPrimitkaBaseKey =
    'DostavaURad/PismenaZaPotvrduPrimitkaBase';
  export interface PismenaZaPotvrduPrimitkaBase {
    ID?: string;
    KreiraoID?: string;
    KreiraoBrOznakaNazivUJNaziv?: string;
    ZahtjevZaID?: string;
    ZahtjevZaUstrojstvenaJedinicaID?: string;
    ZahtjevZaBrOznakaNazivUJNaziv?: string;
    RazlogID?: string;
    RazlogNaziv?: string;
    PismenoID?: string;
    PredmetID?: string;
    PismenoPredmetKlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    DatumKreiranja?: Date;
    PZPP_WithRecompile?: boolean;
    EntityID?: string;
    PismenoBarkod?: string;
    GlavniPredmetID?: string;
    UstrojstvenaJedinicaID?: string;
    UNadleznostiID?: string;
  }

  export const PismenaZaPotvrduPrimitkaBrowseKey =
    'DostavaURad/PismenaZaPotvrduPrimitkaBrowse';
  export interface PismenaZaPotvrduPrimitkaBrowse {
    ID?: string;
    KreiraoID?: string;
    ZahtjevZaID?: string;
    RazlogID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    ZahtjevZaBrOznakaNazivUJNaziv?: string;
    KreiraoBrOznakaNazivUJNaziv?: string;
    PismenoPredmetKlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    PismenoUrBroj?: string;
    PismenoNaziv?: string;
    RazlogNaziv?: string;
    PZPP_WithRecompile?: boolean;
    PredmetID?: string;
    EntityID?: string;
    PismenoBarkod?: string;
  }

  export const GetNepotvrdjeniZahtjeviZaPotvrduPrimitkaKey =
    'DostavaURad/GetNepotvrdjeniZahtjeviZaPotvrduPrimitka';
  export interface GetNepotvrdjeniZahtjeviZaPotvrduPrimitka {}

  export const PotvrdePrimitkaZaKojeSamOvlastenKey =
    'DostavaURad/PotvrdePrimitkaZaKojeSamOvlasten';
  export interface PotvrdePrimitkaZaKojeSamOvlasten {}

  export const PismenaZaPotvrduPrimitkaKey =
    'DostavaURad/PismenaZaPotvrduPrimitka';
  export interface PismenaZaPotvrduPrimitka {
    ID?: string;
    KreiraoID?: string;
    ZahtjevZaID?: string;
    RazlogID?: string;
    PismenoID?: string;
    DatumKreiranja?: Date;
    PredmetID?: string;
    PZPP_WithRecompile?: boolean;
  }

  export const UpsertPotvrdaPrimitkaKey = 'DostavaURad/UpsertPotvrdaPrimitka';
  export interface UpsertPotvrdaPrimitka {
    PotvrdaPrimitka: string;
  }

  export const UpsertZahtjevZaPotvrdomPrimitkaKey =
    'DostavaURad/UpsertZahtjevZaPotvrdomPrimitka';
  export interface UpsertZahtjevZaPotvrdomPrimitka {
    ZahtjevZaPotvrdomPrimitka: string;
    SkipPermissionCheck?: boolean;
  }

  export const UpsertPismenoRasporedjivanjeSaZahtjevomZaPotvrduPrimitkaKey =
    'DostavaURad/UpsertPismenoRasporedjivanjeSaZahtjevomZaPotvrduPrimitka';
  export interface UpsertPismenoRasporedjivanjeSaZahtjevomZaPotvrduPrimitka {
    Pismena: string;
    UstrojstvenaJedinicaIliZaposlenikID: string;
  }

  export const PredmetRasporedjivanjeSaZahtjevomZaPotvrduPrimitkaKey =
    'DostavaURad/PredmetRasporedjivanjeSaZahtjevomZaPotvrduPrimitka';
  export interface PredmetRasporedjivanjeSaZahtjevomZaPotvrduPrimitka {
    Predmeti: string;
    UstrojstvenaJedinicaIliZaposlenikID: string;
  }

  export const PredmetRasporedjivanjeSaPotvrdomPrimitkaPismenaKey =
    'DostavaURad/PredmetRasporedjivanjeSaPotvrdomPrimitkaPismena';
  export interface PredmetRasporedjivanjeSaPotvrdomPrimitkaPismena {
    Pismena?: string;
    Zahtjevi?: string;
    UstrojstvenaJedinicaIliZaposlenikID: string;
  }

  export const UpsertPismenoSaZahtjevomZaPotvrduPrimitkaKey =
    'DostavaURad/UpsertPismenoSaZahtjevomZaPotvrduPrimitka';
  export interface UpsertPismenoSaZahtjevomZaPotvrduPrimitka {
    Pismeno: string;
    PismenoPrilozi?: string;
    PismenoDodatneOznake?: string;
    PismenoSluzbeneBiljeske?: string;
    TipPismenaID?: string;
    ForceInsert?: boolean;
    ForceUpdate?: boolean;
    StupanjTajnostiID?: string;
  }

  export const OsnivanjePredmetaSaZahtjevomZaPotvrdomPrimitkaKey =
    'DostavaURad/OsnivanjePredmetaSaZahtjevomZaPotvrdomPrimitka';
  export interface OsnivanjePredmetaSaZahtjevomZaPotvrdomPrimitka {
    Predmet: string;
    Pismeno: string;
    PredmetDodatneStranke?: string;
    PismenoDodatneOznake?: string;
    PredmetDodatneOznake?: string;
    PismenoPrilozi?: string;
    PismenoSluzbeneBiljeske?: string;
    TipPismenaID?: string;
    TipPredmetaID?: string;
    CustomOsnivanje?: boolean;
    PredmetStupanjTajnostiID?: string;
    PismenoStupanjTajnostiID?: string;
  }

  export const UstupanjePredmetaKey = 'DostavaURad/UstupanjePredmeta';
  export interface UstupanjePredmeta {
    ID?: string;
    PredmetID: string;
    KreiraoID: string;
    DaoUputuID?: string;
    Uputa?: string;
    UstrojstvenaJedinicaID: string;
    DatumKreiranja?: Date;
    TemeljemGlavnogPredmeta?: boolean;
    UNadleznostiID?: string;
  }

  export const ValidForUstupanjeKey = 'DostavaURad/ValidForUstupanje';
  export interface ValidForUstupanje {}

  export const UpsertUstupanjePredmetaKey =
    'DostavaURad/UpsertUstupanjePredmeta';
  export interface UpsertUstupanjePredmeta {
    UstupanjePredmeta: string;
  }

  export const VracanjeUPisarnicuKey = 'DostavaURad/VracanjeUPisarnicu';
  export interface VracanjeUPisarnicu {
    ID?: string;
    VratioUPisarnicuID?: string;
    RazlogVracanjaUPisarnicu: string;
    DatumVracanjaUPisarnicu?: Date;
  }

  export const RS_InternaDostavnaKnjiga_LookupZahtjevZaKey =
    'DostavaURad/RS_InternaDostavnaKnjiga_LookupZahtjevZa';
  export interface RS_InternaDostavnaKnjiga_LookupZahtjevZa {
    ID?: string;
    Value?: string;
    Label?: string;
    RBR?: number;
  }

  export const RS_InternaDostavnaKnjiga_LookupPotvrdioKey =
    'DostavaURad/RS_InternaDostavnaKnjiga_LookupPotvrdio';
  export interface RS_InternaDostavnaKnjiga_LookupPotvrdio {
    ID?: string;
    Value?: string;
    Label?: string;
    RBR?: number;
  }

  export const DodjelaURadPredmetBrisanKey =
    'DostavaURad/DodjelaURadPredmetBrisan';
  export interface DodjelaURadPredmetBrisan {}

  export const DodjelaURadPredmetVezanKey =
    'DostavaURad/DodjelaURadPredmetVezan';
  export interface DodjelaURadPredmetVezan {}

  export const ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPredmetKey =
    'DostavaURad/ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPredmet';
  export interface ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPredmet {}

  export const ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPismenoKey =
    'DostavaURad/ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPismeno';
  export interface ValidForZahtjevZaPotvrdomPrimitkaDostavaURadPismeno {}

  export const ValidForZahtjevZaPotvrdomPrimitkaDostavaURadStatusPismenaKey =
    'DostavaURad/ValidForZahtjevZaPotvrdomPrimitkaDostavaURadStatusPismena';
  export interface ValidForZahtjevZaPotvrdomPrimitkaDostavaURadStatusPismena {}

  export const ZahtjevZaPotvrdomPrimitkaPredmetBrisanKey =
    'DostavaURad/ZahtjevZaPotvrdomPrimitkaPredmetBrisan';
  export interface ZahtjevZaPotvrdomPrimitkaPredmetBrisan {}

  export const ZahtjevZaPotvrdomPrimitkaPredmetVezanTemeljemGlavnogPredmetaKey =
    'DostavaURad/ZahtjevZaPotvrdomPrimitkaPredmetVezanTemeljemGlavnogPredmeta';
  export interface ZahtjevZaPotvrdomPrimitkaPredmetVezanTemeljemGlavnogPredmeta {}

  export const ZahtjevZaPotvrdomPrimitkaPismenoPredmetBrisanKey =
    'DostavaURad/ZahtjevZaPotvrdomPrimitkaPismenoPredmetBrisan';
  export interface ZahtjevZaPotvrdomPrimitkaPismenoPredmetBrisan {}

  export const ZahtjevZaPotvrdomPrimitkaPredmetVezanKey =
    'DostavaURad/ZahtjevZaPotvrdomPrimitkaPredmetVezan';
  export interface ZahtjevZaPotvrdomPrimitkaPredmetVezan {}

  export const ZahtjevZaPotvrdomPrimitkaIstiPredmetIDKey =
    'DostavaURad/ZahtjevZaPotvrdomPrimitkaIstiPredmetID';
  export interface ZahtjevZaPotvrdomPrimitkaIstiPredmetID {}

  export const DrugaUstrojstvenaJedinicaKey =
    'DostavaURad/DrugaUstrojstvenaJedinica';
  export interface DrugaUstrojstvenaJedinica {}

  export const UstupanjePredmetaPredmetBrisanKey =
    'DostavaURad/UstupanjePredmetaPredmetBrisan';
  export interface UstupanjePredmetaPredmetBrisan {}

  export const UstupanjePredmetaPredmetVezanKey =
    'DostavaURad/UstupanjePredmetaPredmetVezan';
  export interface UstupanjePredmetaPredmetVezan {}

  export const ZahtjevZaPotvrdomPrimitkaPismenomPredmetaUAdActaKey =
    'DostavaURad/ZahtjevZaPotvrdomPrimitkaPismenomPredmetaUAdActa';
  export interface ZahtjevZaPotvrdomPrimitkaPismenomPredmetaUAdActa {}

  export const InvalidStupanjTajnostiKey = 'DostavaURad/InvalidStupanjTajnosti';
  export interface InvalidStupanjTajnosti {}

  export const SystemRequiredDatumKreiranjaKey =
    'DostavaURad/SystemRequiredDatumKreiranja';
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredDatumPotvrdePrimitkaKey =
    'DostavaURad/SystemRequiredDatumPotvrdePrimitka';
  export interface SystemRequiredDatumPotvrdePrimitka {}

  export const SystemRequiredDatumVracanjaUPisarnicuKey =
    'DostavaURad/SystemRequiredDatumVracanjaUPisarnicu';
  export interface SystemRequiredDatumVracanjaUPisarnicu {}

  export const SystemRequiredActiveKey = 'DostavaURad/SystemRequiredActive';
  export interface SystemRequiredActive {}
}

export module KnjigaPrimljenePoste {
  export const PosiljkaKey = 'KnjigaPrimljenePoste/Posiljka';
  export interface Posiljka {
    ID?: string;
    RedniBroj?: number;
    EvidencijskiBroj?: string;
    Naziv?: string;
    DatumPrimitka: Date;
    BrojPreporuke?: string;
    PosiljateljID?: string;
    Hitno: boolean;
    PostojiSumnjaONeovlastenomIliZlonamjernomOtvaranju: boolean;
    OmotnicaZaprimljenaOstecena: boolean;
    EvidencijskaOznakaZapisnikaOKomisijskomNalazu?: string;
    Napomena?: string;
    DatumKreiranja?: Date;
    KreiraoID?: string;
    TipPosiljkeID?: string;
    PrimateljID: string;
    LokacijaID?: string;
    Active?: boolean;
  }

  export const PosiljkaRedniBrojGodinaKey =
    'KnjigaPrimljenePoste/PosiljkaRedniBrojGodina';
  export interface PosiljkaRedniBrojGodina {
    ID?: string;
    RedniBrojMax?: number;
    Godina?: number;
  }

  export const PodaciZaGeneriranjeEvidencijskogBrojaKey =
    'KnjigaPrimljenePoste/PodaciZaGeneriranjeEvidencijskogBroja';
  export interface PodaciZaGeneriranjeEvidencijskogBroja {
    ID?: string;
    PosiljkaID?: string;
    DatumPrimitka?: Date;
    GodinaPrimitka?: number;
    VrstaGeneriranjaEvidencijskogBroja?: number;
    DatumPrimjeneVrsteGeneriranjaEvidencijskogBroja?: Date;
    RedniBroj?: number;
    RedniBrojFormatiran?: string;
  }

  export const GenerirajEvidencijskiBrojKey =
    'KnjigaPrimljenePoste/GenerirajEvidencijskiBroj';
  export interface GenerirajEvidencijskiBroj {
    ID?: string;
    EvidencijskiBroj?: string;
    RedniBroj?: number;
  }

  export const VrstaGeneriranjaEvidencijskogBrojaKey =
    'KnjigaPrimljenePoste/VrstaGeneriranjaEvidencijskogBroja';
  export interface VrstaGeneriranjaEvidencijskogBroja {
    ID?: string;
    Sifra: number;
    Opis: string;
  }

  export const OdabranaVrstaGeneriranjaEvidencijskogBrojaKey =
    'KnjigaPrimljenePoste/OdabranaVrstaGeneriranjaEvidencijskogBroja';
  export interface OdabranaVrstaGeneriranjaEvidencijskogBroja {
    ID?: string;
    VrstaGeneriranjaEvidencijskogBrojaID: string;
    ActiveSince?: Date;
  }

  export const PotvrdaPrimitkaPosiljkeKey =
    'KnjigaPrimljenePoste/PotvrdaPrimitkaPosiljke';
  export interface PotvrdaPrimitkaPosiljke {
    ID?: string;
    Napomena?: string;
    DatumPotvrde?: Date;
    PrimitakPotvrdioID?: string;
  }

  export const PosiljkaValidForPotvrdaPrimitkaKey =
    'KnjigaPrimljenePoste/PosiljkaValidForPotvrdaPrimitka';
  export interface PosiljkaValidForPotvrdaPrimitka {}

  export const PosiljkaBrowseBaseKey =
    'KnjigaPrimljenePoste/PosiljkaBrowseBase';
  export interface PosiljkaBrowseBase {
    ID?: string;
    PosiljateljNazivMjesto?: string;
    PrimateljBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    DatumPotvrdePrimitka?: Date;
    DatumNapomena?: string;
    PrimitakPotvrdioBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    PrimitakPotvrdioID?: string;
    PrimateljOrgJedinica?: string;
    PrimitakPotvrdioImePrezime?: string;
    PosiljateljMjestoNaziv?: string;
    PrimateljOrganizacijskaJedinicaNaziv?: string;
  }

  export const PosiljkaBrowseKey = 'KnjigaPrimljenePoste/PosiljkaBrowse';
  export interface PosiljkaBrowse {
    ID?: string;
    EvidencijskiBroj?: string;
    DatumPrimitka?: Date;
    Naziv?: string;
    Hitno?: boolean;
    BrojPreporuke?: string;
    Napomena?: string;
    PrimateljID?: string;
    PosiljateljID?: string;
    LokacijaID?: string;
    TipPosiljkeID?: string;
    Active?: boolean;
    PosiljateljNazivMjesto?: string;
    PrimateljBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    DatumPotvrdePrimitka?: Date;
    DatumNapomena?: string;
    PrimitakPotvrdioBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    PrimitakPotvrdioID?: string;
    PrimateljOrganizacijskaJedinicaNaziv?: string;
    PrimateljOrgJedinica?: string;
    PrimitakPotvrdioImePrezime?: string;
    PosiljateljMjestoNaziv?: string;
  }

  export const PregledPosiljkiBrowseKey =
    'KnjigaPrimljenePoste/PregledPosiljkiBrowse';
  export interface PregledPosiljkiBrowse {
    ID?: string;
    EvidencijskiBroj?: string;
    DatumPrimitka?: Date;
    Naziv?: string;
    Hitno?: boolean;
    PrimateljID?: string;
    Active?: boolean;
    Napomena?: string;
    BrojPreporuke?: string;
    DatumPotvrdePrimitka?: Date;
    PrimitakPotvrdioID?: string;
    PosiljateljNazivMjesto?: string;
    PrimateljOrgJedinica?: string;
    PrimitakPotvrdioImePrezime?: string;
    PosiljateljMjestoNaziv?: string;
    PrimateljOrganizacijskaJedinicaNaziv?: string;
    PrimateljBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
  }

  export const PosiljkaZaPotvrduPrimitkaBrowseKey =
    'KnjigaPrimljenePoste/PosiljkaZaPotvrduPrimitkaBrowse';
  export interface PosiljkaZaPotvrduPrimitkaBrowse {
    ID?: string;
    EvidencijskiBroj?: string;
    DatumPrimitka?: Date;
    Naziv?: string;
    Hitno?: boolean;
    BrojPreporuke?: string;
    Active?: boolean;
    Napomena?: string;
    PrimateljID?: string;
    DatumNapomena?: string;
    PosiljateljNazivMjesto?: string;
    PrimateljBrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    DatumPotvrdePrimitka?: Date;
  }

  export const ZaPotvrduKey = 'KnjigaPrimljenePoste/ZaPotvrdu';
  export interface ZaPotvrdu {}

  export const ZaPotvrduCountKey = 'KnjigaPrimljenePoste/ZaPotvrduCount';
  export interface ZaPotvrduCount {}

  export const TipPosiljkeKey = 'KnjigaPrimljenePoste/TipPosiljke';
  export interface TipPosiljke {
    ID?: string;
    Naziv: string;
  }

  export const PosiljkaPermissionsKey =
    'KnjigaPrimljenePoste/PosiljkaPermissions';
  export interface PosiljkaPermissions {
    PosiljkaID?: string;
    ZaposlenikID?: string;
    Subtype?: string;
    PermissionPosiljkaPrimateljDirektanPrimateljID?: string;
    PermissionPosiljkaPravoRadaUJPravoRadaUJID?: string;
    PermissionPosiljkaPravoUvidaUJPravuUvidaUJID?: string;
    PermissionPosiljkaPravoUvidaZaposlenikPravuUvidaZaposlenikID?: string;
    PermissionPosiljkaPravoRadaZaposlenikPravuRadaZaposlenikID?: string;
    PermissionPosiljkaRadomUpravljaRadomUpravljaID?: string;
    PermissionPosiljkaOvlasteniSluzbenikPrimateljaRadnogTijelaOvlasteniSluzbenikRadnogTijelaID?: string;
    PermissionPosiljkaPrimateljRadnoTijeloZaposlenikRadnogTijelaID?: string;
  }

  export const PermissionPosiljkaPrimateljKey =
    'KnjigaPrimljenePoste/PermissionPosiljkaPrimatelj';
  export interface PermissionPosiljkaPrimatelj {
    ID?: string;
  }

  export const PermissionPosiljkaPravoRadaUJKey =
    'KnjigaPrimljenePoste/PermissionPosiljkaPravoRadaUJ';
  export interface PermissionPosiljkaPravoRadaUJ {
    ID?: string;
  }

  export const PermissionPosiljkaPravoUvidaUJKey =
    'KnjigaPrimljenePoste/PermissionPosiljkaPravoUvidaUJ';
  export interface PermissionPosiljkaPravoUvidaUJ {
    ID?: string;
  }

  export const PermissionPosiljkaPravoUvidaZaposlenikKey =
    'KnjigaPrimljenePoste/PermissionPosiljkaPravoUvidaZaposlenik';
  export interface PermissionPosiljkaPravoUvidaZaposlenik {
    ID?: string;
  }

  export const PermissionPosiljkaPravoRadaZaposlenikKey =
    'KnjigaPrimljenePoste/PermissionPosiljkaPravoRadaZaposlenik';
  export interface PermissionPosiljkaPravoRadaZaposlenik {
    ID?: string;
  }

  export const PermissionPosiljkaRadomUpravljaKey =
    'KnjigaPrimljenePoste/PermissionPosiljkaRadomUpravlja';
  export interface PermissionPosiljkaRadomUpravlja {
    ID?: string;
  }

  export const PermissionPosiljkaOvlasteniSluzbenikPrimateljaRadnogTijelaKey =
    'KnjigaPrimljenePoste/PermissionPosiljkaOvlasteniSluzbenikPrimateljaRadnogTijela';
  export interface PermissionPosiljkaOvlasteniSluzbenikPrimateljaRadnogTijela {
    ID?: string;
  }

  export const PermissionPosiljkaPrimateljRadnoTijeloKey =
    'KnjigaPrimljenePoste/PermissionPosiljkaPrimateljRadnoTijelo';
  export interface PermissionPosiljkaPrimateljRadnoTijelo {
    ID?: string;
  }

  export const PosiljkaBrowseSearchKey =
    'KnjigaPrimljenePoste/PosiljkaBrowseSearch';
  export interface PosiljkaBrowseSearch {
    Pattern?: string;
    EvidencijskiBroj?: string;
    EvidencijskiBrojDo?: number;
    DatumPrimitkaOd?: Date;
    DatumPrimitkaDo?: Date;
    Posiljatelj?: string;
    Primatelj?: string;
    LokacijaPrimateljaIDs?: string;
    NazivPosiljke?: string;
    TipPosiljkeIDs?: string;
    BrojPreporuke?: string;
    Hitno?: boolean;
    DatumPotvrdePrimitkaOd?: Date;
    DatumPotvrdePrimitkaDo?: Date;
    PrimitakPotvrdio?: string;
    Napomena?: string;
  }

  export const PrimateljKey = 'KnjigaPrimljenePoste/Primatelj';
  export interface Primatelj {
    ID?: string;
    Naziv?: string;
    UserName?: string;
    OrganizacijskaJedinicaNaziv?: string;
    NazivOrganizacijskaJedinicaNaziv?: string;
    BrojcanaOznaka?: string;
    NazivUstrojstvenaJedinicaNazivBrojcanaOznaka?: string;
    BrOznakaNazivUstrojstvenaJedinicaNaziv?: string;
    IsZaposlenik?: boolean;
    UstrojstvenaJedinicaID?: string;
  }

  export const PrimateljBrOznakaNazivUJNazivQuickSearchKey =
    'KnjigaPrimljenePoste/PrimateljBrOznakaNazivUJNazivQuickSearch';
  export interface PrimateljBrOznakaNazivUJNazivQuickSearch {
    Pattern?: string;
  }

  export const ReferenceNonexistentPrimateljKey =
    'KnjigaPrimljenePoste/ReferenceNonexistentPrimatelj';
  export interface ReferenceNonexistentPrimatelj {}

  export const OdabranaVrstaGeneriranjaEvidencijskogBroja_ChangesKey =
    'KnjigaPrimljenePoste/OdabranaVrstaGeneriranjaEvidencijskogBroja_Changes';
  export interface OdabranaVrstaGeneriranjaEvidencijskogBroja_Changes {
    ID?: string;
    EntityID: string;
    ActiveSince?: Date;
    VrstaGeneriranjaEvidencijskogBrojaID: string;
  }

  export const OdabranaVrstaGeneriranjaEvidencijskogBroja_HistoryKey =
    'KnjigaPrimljenePoste/OdabranaVrstaGeneriranjaEvidencijskogBroja_History';
  export interface OdabranaVrstaGeneriranjaEvidencijskogBroja_History {
    ID?: string;
    ActiveUntil?: Date;
    ActiveSince?: Date;
    EntityID: string;
    VrstaGeneriranjaEvidencijskogBrojaID: string;
  }

  export const PosiljkaLookupKey = 'KnjigaPrimljenePoste/PosiljkaLookup';
  export interface PosiljkaLookup {
    ID?: string;
    EvidencijskiBroj?: string;
  }

  export const VrstaGeneriranjaEvidencijskogBrojaLookupKey =
    'KnjigaPrimljenePoste/VrstaGeneriranjaEvidencijskogBrojaLookup';
  export interface VrstaGeneriranjaEvidencijskogBrojaLookup {
    ID?: string;
    Sifra?: number;
    Opis?: string;
  }

  export const TipPosiljkeLookupKey = 'KnjigaPrimljenePoste/TipPosiljkeLookup';
  export interface TipPosiljkeLookup {
    ID?: string;
    Naziv?: string;
  }

  export const OdabranaVrstaGeneriranjaEvidencijskogBroja_ChangesActiveUntilKey =
    'KnjigaPrimljenePoste/OdabranaVrstaGeneriranjaEvidencijskogBroja_ChangesActiveUntil';
  export interface OdabranaVrstaGeneriranjaEvidencijskogBroja_ChangesActiveUntil {
    ID?: string;
    ActiveUntil?: Date;
  }

  export const SystemRequiredDatumKreiranjaKey =
    'KnjigaPrimljenePoste/SystemRequiredDatumKreiranja';
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredKreiraoKey =
    'KnjigaPrimljenePoste/SystemRequiredKreirao';
  export interface SystemRequiredKreirao {}

  export const SystemRequiredDatumPotvrdeKey =
    'KnjigaPrimljenePoste/SystemRequiredDatumPotvrde';
  export interface SystemRequiredDatumPotvrde {}

  export const SystemRequiredPrimitakPotvrdioKey =
    'KnjigaPrimljenePoste/SystemRequiredPrimitakPotvrdio';
  export interface SystemRequiredPrimitakPotvrdio {}

  export const SystemRequiredActiveKey =
    'KnjigaPrimljenePoste/SystemRequiredActive';
  export interface SystemRequiredActive {}

  export const SystemRequiredEntityKey =
    'KnjigaPrimljenePoste/SystemRequiredEntity';
  export interface SystemRequiredEntity {}
}

export module KorisnickaPolja {
  export const PredmetKey = 'KorisnickaPolja/Predmet';
  export interface Predmet {
    ID?: string;
  }

  export const PismenoKey = 'KorisnickaPolja/Pismeno';
  export interface Pismeno {
    ID?: string;
  }

  export const PrilogKey = 'KorisnickaPolja/Prilog';
  export interface Prilog {
    ID?: string;
  }

  export const OsnovniSubjektKey = 'KorisnickaPolja/OsnovniSubjekt';
  export interface OsnovniSubjekt {
    ID?: string;
  }

  export const DeployedConfKey = 'KorisnickaPolja/DeployedConf';
  export interface DeployedConf {
    ID?: string;
    Json: string;
    DatumKreiranja?: Date;
    KorisnikID?: string;
  }

  export const DeployedConfBrowseKey = 'KorisnickaPolja/DeployedConfBrowse';
  export interface DeployedConfBrowse {
    ID?: string;
    DatumKreiranja?: Date;
    Korisnik?: string;
  }

  export const ReadOnlyTabsKey = 'KorisnickaPolja/ReadOnlyTabs';
  export interface ReadOnlyTabs {
    ID?: string;
    TabID?: string;
  }

  export const PredmetTROKey = 'KorisnickaPolja/PredmetTRO';
  export interface PredmetTRO {
    PredmetID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const GetTabsForPredmetKey = 'KorisnickaPolja/GetTabsForPredmet';
  export interface GetTabsForPredmet {
    ID?: string;
  }

  export const PismenoTROKey = 'KorisnickaPolja/PismenoTRO';
  export interface PismenoTRO {
    PismenoID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const GetTabsForPismenoKey = 'KorisnickaPolja/GetTabsForPismeno';
  export interface GetTabsForPismeno {
    ID?: string;
  }

  export const PrilogTROKey = 'KorisnickaPolja/PrilogTRO';
  export interface PrilogTRO {
    PrilogID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const GetTabsForPrilogKey = 'KorisnickaPolja/GetTabsForPrilog';
  export interface GetTabsForPrilog {
    ID?: string;
  }

  export const OsnovniSubjektTROKey = 'KorisnickaPolja/OsnovniSubjektTRO';
  export interface OsnovniSubjektTRO {
    OsnovniSubjektID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const GetTabsForOsnovniSubjektKey =
    'KorisnickaPolja/GetTabsForOsnovniSubjekt';
  export interface GetTabsForOsnovniSubjekt {
    ID?: string;
  }

  export const PredmetTVKey = 'KorisnickaPolja/PredmetTV';
  export interface PredmetTV {
    PredmetID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const Predmet_TWF_VKey = 'KorisnickaPolja/Predmet_TWF_V';
  export interface Predmet_TWF_V {
    TabID?: string;
    Subtype?: string;
  }

  export const EditableTabsKey = 'KorisnickaPolja/EditableTabs';
  export interface EditableTabs {
    ID?: string;
    TabID?: string;
  }

  export const PismenoTVKey = 'KorisnickaPolja/PismenoTV';
  export interface PismenoTV {
    PismenoID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const Pismeno_TWF_VKey = 'KorisnickaPolja/Pismeno_TWF_V';
  export interface Pismeno_TWF_V {
    TabID?: string;
    Subtype?: string;
  }

  export const PrilogTVKey = 'KorisnickaPolja/PrilogTV';
  export interface PrilogTV {
    PrilogID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const Prilog_TWF_VKey = 'KorisnickaPolja/Prilog_TWF_V';
  export interface Prilog_TWF_V {
    TabID?: string;
    Subtype?: string;
  }

  export const OsnovniSubjektTVKey = 'KorisnickaPolja/OsnovniSubjektTV';
  export interface OsnovniSubjektTV {
    OsnovniSubjektID?: string;
    ZaposlenikID?: string;
    TabID?: string;
    Subtype?: string;
  }

  export const OsnovniSubjekt_TWF_VKey = 'KorisnickaPolja/OsnovniSubjekt_TWF_V';
  export interface OsnovniSubjekt_TWF_V {
    TabID?: string;
    Subtype?: string;
  }

  export const SystemRequiredDatumKreiranjaKey =
    'KorisnickaPolja/SystemRequiredDatumKreiranja';
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredKorisnikKey =
    'KorisnickaPolja/SystemRequiredKorisnik';
  export interface SystemRequiredKorisnik {}
}

export module Ocr {
  export const OcrStartedKey = 'Ocr/OcrStarted';
  export interface OcrStarted {
    ID?: string;
    DocumentID: string;
    DocumentVersion: number;
    DatumKreiranja?: Date;
  }

  export const OcrCompletedKey = 'Ocr/OcrCompleted';
  export interface OcrCompleted {
    ID?: string;
    OcrID: string;
    DatumZavrsetka?: Date;
  }

  export const OcrErrorKey = 'Ocr/OcrError';
  export interface OcrError {
    ID?: string;
    DocumentID: string;
    DocumentVersion: number;
    DatumGreske?: Date;
    RazlogGreske?: string;
  }

  export const DeleteOldErrorsKey = 'Ocr/DeleteOldErrors';
  export interface DeleteOldErrors {}

  export const OcrNextDocumentsKey = 'Ocr/OcrNextDocuments';
  export interface OcrNextDocuments {
    ID?: string;
    DocumentID?: string;
    DocumentVersion?: number;
    DmsProvider?: string;
  }

  export const ComputePismenoFTSKljucneRijeciKey =
    'Ocr/ComputePismenoFTSKljucneRijeci';
  export interface ComputePismenoFTSKljucneRijeci {
    ID?: string;
    KljucneRijeci?: string;
  }

  export const OcrPismenoKey = 'Ocr/OcrPismeno';
  export interface OcrPismeno {
    ID?: string;
    KljucneRijeci: string;
  }

  export const OcrPismenoFTSKey = 'Ocr/OcrPismenoFTS';
  export interface OcrPismenoFTS {
    ID?: string;
    KljucneRijeci?: string;
  }

  export const ComputePrilogFTSKljucneRijeciKey =
    'Ocr/ComputePrilogFTSKljucneRijeci';
  export interface ComputePrilogFTSKljucneRijeci {
    ID?: string;
    KljucneRijeci?: string;
  }

  export const OcrPrilogKey = 'Ocr/OcrPrilog';
  export interface OcrPrilog {
    ID?: string;
    KljucneRijeci: string;
  }

  export const OcrPrilogFTSKey = 'Ocr/OcrPrilogFTS';
  export interface OcrPrilogFTS {
    ID?: string;
    KljucneRijeci?: string;
  }
}

export module Otprema2 {
  export const GrupaPrimateljaKey = 'Otprema2/GrupaPrimatelja';
  export interface GrupaPrimatelja {
    ID?: string;
    Naziv: string;
    KopiranoIzGrupePrimateljaID?: string;
    MedunarodniPromet: boolean;
  }

  export const GrupaPrimateljaBrowseKey = 'Otprema2/GrupaPrimateljaBrowse';
  export interface GrupaPrimateljaBrowse {
    ID?: string;
    Naziv?: string;
    MedunarodniPromet?: boolean;
  }

  export const ClanGrupePrimateljaKey = 'Otprema2/ClanGrupePrimatelja';
  export interface ClanGrupePrimatelja {
    ID?: string;
    GrupaPrimateljaID?: string;
    KontaktID: string;
  }

  export const ClanGrupePrimateljaBrowseKey =
    'Otprema2/ClanGrupePrimateljaBrowse';
  export interface ClanGrupePrimateljaBrowse {
    ID?: string;
    GrupaPrimateljaID?: string;
    KontaktID?: string;
    Subjekt?: string;
    Mjesto?: string;
    Adresa?: string;
  }

  export const InsertPosiljkaKey = 'Otprema2/InsertPosiljka';
  export interface InsertPosiljka {
    Broj?: string;
    Masa?: number;
    BrojOmotnica?: number;
    Cijena?: number;
    Vrijednost?: number;
    Napomena?: string;
    BrojPreporuke?: string;
    OmotnicaZapecacena?: boolean;
    PogresnoDostavljena?: boolean;
    SadrzajIDsJsonList?: string;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaSubjektSetAsDefaultAdresa?: boolean;
    PosiljkaAdresaLokacijaJson?: string;
    PosiljkaVrstaPosiljkeDodatneUslugeIDsJson?: string;
    VrstaPosiljkeID?: string;
    IspisOmotniceID?: string;
    PrimateljID?: string;
    UputaZaOtpremuID?: string;
  }

  export const KorisnickePostavkeKey = 'Otprema2/KorisnickePostavke';
  export interface KorisnickePostavke {
    ID?: string;
    ZaposlenikID: string;
    IspisOmotniceNakonSpremanja?: boolean;
    IsVagaEnabled?: boolean;
    VagaUrl?: string;
    AutomatskoUcitavanjeIzVage?: boolean;
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    IspisOmotniceID?: string;
    TipPrimateljaID?: string;
  }

  export const KorisnickePostavke_ValidForUpsertKey =
    'Otprema2/KorisnickePostavke_ValidForUpsert';
  export interface KorisnickePostavke_ValidForUpsert {}

  export const KorisnickePostavkeVrstaPosiljkeDodatnaUslugaKey =
    'Otprema2/KorisnickePostavkeVrstaPosiljkeDodatnaUsluga';
  export interface KorisnickePostavkeVrstaPosiljkeDodatnaUsluga {
    ID?: string;
    KorisnickePostavkeID: string;
    VrstaPosiljkeDodatnaUslugaID: string;
  }

  export const KorisnickePostavkeVrstaPosiljkeDodatnaUsluga_ValidForInsertKey =
    'Otprema2/KorisnickePostavkeVrstaPosiljkeDodatnaUsluga_ValidForInsert';
  export interface KorisnickePostavkeVrstaPosiljkeDodatnaUsluga_ValidForInsert {}

  export const GetKorisnickePostavkeComputedKey =
    'Otprema2/GetKorisnickePostavkeComputed';
  export interface GetKorisnickePostavkeComputed {
    ID?: string;
    ZaposlenikID?: string;
    TipPrimateljaID?: string;
    PruzateljUslugeID?: string;
    VrstaPosiljkeID?: string;
    IspisOmotniceID?: string;
    IspisOmotniceNakonSpremanja?: boolean;
    VrstaPosiljkeDodatneUslugeIDsJson?: string;
    IsVagaEnabled?: boolean;
    VagaUrl?: string;
    AutomatskoUcitavanjeIzVage?: boolean;
  }

  export const InsertKorisnickePostavkeKey =
    'Otprema2/InsertKorisnickePostavke';
  export interface InsertKorisnickePostavke {
    IspisOmotniceNakonSpremanja?: boolean;
    VrstaPosiljkeDodatneUslugeIDsJson?: string;
    AutomatskoUcitavanjeIzVage?: boolean;
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    IspisOmotniceID?: string;
    TipPrimateljaID?: string;
  }

  export const UpsertKorisnickePostavkeKey =
    'Otprema2/UpsertKorisnickePostavke';
  export interface UpsertKorisnickePostavke {
    IspisOmotniceNakonSpremanja?: boolean;
    VrstaPosiljkeDodatneUslugeIDsJson?: string;
    AutomatskoUcitavanjeIzVage?: boolean;
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    IspisOmotniceID?: string;
    TipPrimateljaID?: string;
  }

  export const SetIspisOmotniceNakonSpremanjaKey =
    'Otprema2/SetIspisOmotniceNakonSpremanja';
  export interface SetIspisOmotniceNakonSpremanja {
    IspisOmotniceNakonSpremanja?: boolean;
  }

  export const VrstaPosiljkeKey = 'Otprema2/VrstaPosiljke';
  export interface VrstaPosiljke {
    ID?: string;
    Naziv: string;
    PruzateljUslugeID: string;
  }

  export const VrstaPosiljkeLookupKey = 'Otprema2/VrstaPosiljkeLookup';
  export interface VrstaPosiljkeLookup {
    ID?: string;
    Naziv?: string;
    PruzateljUslugeID?: string;
  }

  export const VrstaPosiljkeByDodatnaUslugaKey =
    'Otprema2/VrstaPosiljkeByDodatnaUsluga';
  export interface VrstaPosiljkeByDodatnaUsluga {
    DodatnaUslugaID?: string;
  }

  export const VrstaPosiljkeByPruzateljUslugeKey =
    'Otprema2/VrstaPosiljkeByPruzateljUsluge';
  export interface VrstaPosiljkeByPruzateljUsluge {
    PruzateljUslugeID?: string;
  }

  export const VrstaPosiljkeByPruzateljUslugeNonExclusiveKey =
    'Otprema2/VrstaPosiljkeByPruzateljUslugeNonExclusive';
  export interface VrstaPosiljkeByPruzateljUslugeNonExclusive {
    PruzateljUslugeID?: string;
  }

  export const VrstaPosiljkeBrowseKey = 'Otprema2/VrstaPosiljkeBrowse';
  export interface VrstaPosiljkeBrowse {
    ID?: string;
    Naziv?: string;
    PruzateljUsluge?: string;
  }

  export const PruzateljUslugeKey = 'Otprema2/PruzateljUsluge';
  export interface PruzateljUsluge {
    ID?: string;
    Naziv: string;
    Active?: boolean;
  }

  export const PruzateljUslugeBrowseKey = 'Otprema2/PruzateljUslugeBrowse';
  export interface PruzateljUslugeBrowse {
    ID?: string;
    Naziv?: string;
    Active?: boolean;
  }

  export const IspisOmotniceKey = 'Otprema2/IspisOmotnice';
  export interface IspisOmotnice {
    ID?: string;
    Naziv: string;
    NazivIzvjestaja?: string;
  }

  export const IspisOmotniceBrowseKey = 'Otprema2/IspisOmotniceBrowse';
  export interface IspisOmotniceBrowse {
    ID?: string;
    Naziv?: string;
  }

  export const DodatnaUslugaKey = 'Otprema2/DodatnaUsluga';
  export interface DodatnaUsluga {
    ID?: string;
    Naziv: string;
    PruzateljUslugeID: string;
    CijenaUnutarnjiPromet?: number;
    CijenaMedjunarodniPromet?: number;
    IspisOmotniceID?: string;
  }

  export const DodatnaUslugaLookupKey = 'Otprema2/DodatnaUslugaLookup';
  export interface DodatnaUslugaLookup {
    ID?: string;
    Naziv?: string;
  }

  export const FilterByVrstaPosiljkeIDsKey =
    'Otprema2/FilterByVrstaPosiljkeIDs';
  export interface FilterByVrstaPosiljkeIDs {
    VrstePosiljakaIDs?: string;
  }

  export const DodatnaUslugaBrowseKey = 'Otprema2/DodatnaUslugaBrowse';
  export interface DodatnaUslugaBrowse {
    ID?: string;
    Naziv?: string;
    CijenaUnutarnjiPromet?: number;
    CijenaMedjunarodniPromet?: number;
    PruzateljUsluge?: string;
  }

  export const FilterByVrstaPosiljkeIDKey = 'Otprema2/FilterByVrstaPosiljkeID';
  export interface FilterByVrstaPosiljkeID {
    VrstaPosiljkeID?: string;
  }

  export const VrstaPosiljkeDodatnaUslugaKey =
    'Otprema2/VrstaPosiljkeDodatnaUsluga';
  export interface VrstaPosiljkeDodatnaUsluga {
    ID?: string;
    VrstaPosiljkeID: string;
    DodatnaUslugaID: string;
  }

  export const VrstaPosiljkeDodatnaUslugaLookupKey =
    'Otprema2/VrstaPosiljkeDodatnaUslugaLookup';
  export interface VrstaPosiljkeDodatnaUslugaLookup {
    ID?: string;
    VrstaPosiljkeID?: string;
    DodatnaUslugaNaziv?: string;
  }

  export const VrstaPosiljkeDodatnaUslugaBrowseKey =
    'Otprema2/VrstaPosiljkeDodatnaUslugaBrowse';
  export interface VrstaPosiljkeDodatnaUslugaBrowse {
    ID?: string;
    DodatnaUslugaID?: string;
    VrstaPosiljke?: string;
  }

  export const CjenikKey = 'Otprema2/Cjenik';
  export interface Cjenik {
    ID?: string;
    VrstaPosiljkeID: string;
    MasaOd?: number;
    MasaDo?: number;
    VrijednostOd?: number;
    VrijednostDo?: number;
    CijenaUnutarnjiPromet?: number;
    CijenaMedjunarodniPromet?: number;
  }

  export const GetCjenikForKey = 'Otprema2/GetCjenikFor';
  export interface GetCjenikFor {
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    Masa?: number;
    Vrijednost?: number;
  }

  export const CjenikBrowseKey = 'Otprema2/CjenikBrowse';
  export interface CjenikBrowse {
    ID?: string;
    VrstaPosiljkeID?: string;
    MasaOd?: number;
    MasaDo?: number;
    VrijednostOd?: number;
    VrijednostDo?: number;
    CijenaUnutarnjiPromet?: number;
    CijenaMedjunarodniPromet?: number;
    VrstaPosiljke?: string;
    PruzateljUsluge?: string;
  }

  export const DohvatiUkupnuCijenuPosiljkeKey =
    'Otprema2/DohvatiUkupnuCijenuPosiljke';
  export interface DohvatiUkupnuCijenuPosiljke {
    ID?: string;
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    DodatnaUslugaID?: string;
    MasaOd?: number;
    MasaDo?: number;
    VrijednostOd?: number;
    VrijednostDo?: number;
    Naziv?: string;
    CijenaUnutarnjiPromet?: number;
    CijenaMedjunarodniPromet?: number;
  }

  export const DohvatiUkupnuCijenuPosiljkeComputedKey =
    'Otprema2/DohvatiUkupnuCijenuPosiljkeComputed';
  export interface DohvatiUkupnuCijenuPosiljkeComputed {
    ID?: string;
    UkupnaCijena?: number;
  }

  export const DohvatiUkupnuCijenuPosiljkeComputedGetFilterKey =
    'Otprema2/DohvatiUkupnuCijenuPosiljkeComputedGetFilter';
  export interface DohvatiUkupnuCijenuPosiljkeComputedGetFilter {
    VrstaPosiljkeID?: string;
    PruzateljUslugeID?: string;
    VrstaPosiljkeDodatneUslugeIDs?: string;
    Masa?: number;
    Vrijednost?: number;
    NaseljePrimateljaID?: string;
    PrimateljID?: string;
  }

  export const DohvatiParametreZaIzvjestajePosiljkeComputedKey =
    'Otprema2/DohvatiParametreZaIzvjestajePosiljkeComputed';
  export interface DohvatiParametreZaIzvjestajePosiljkeComputed {
    ID?: string;
    Ids?: string;
    IspisOmotniceID?: string;
    UrlParams?: string;
    Info?: string;
    Error?: string;
  }

  export const DohvatiParametreZaIzvjestajePosiljkeKey =
    'Otprema2/DohvatiParametreZaIzvjestajePosiljke';
  export interface DohvatiParametreZaIzvjestajePosiljke {
    PosiljkeIDs?: string;
  }

  export const PosiljkaKey = 'Otprema2/Posiljka';
  export interface Posiljka {
    ID?: string;
    Broj?: string;
    VrstaPosiljkeID: string;
    IspisOmotniceID?: string;
    Masa?: number;
    BrojOmotnica?: number;
    Cijena?: number;
    Vrijednost?: number;
    Napomena?: string;
    BrojPreporuke?: string;
    OmotnicaZapecacena?: boolean;
    PogresnoDostavljena?: boolean;
    DatumKreiranja?: Date;
    KreiraoID?: string;
    FTSID?: number;
    PrimateljID: string;
  }

  export const ValidForKreiranjeKey = 'Otprema2/ValidForKreiranje';
  export interface ValidForKreiranje {}

  export const SadrzajPosiljkeNeaktivanPosiljkaSaveKey =
    'Otprema2/SadrzajPosiljkeNeaktivanPosiljkaSave';
  export interface SadrzajPosiljkeNeaktivanPosiljkaSave {}

  export const PosiljkaDetailsKey = 'Otprema2/PosiljkaDetails';
  export interface PosiljkaDetails {
    ID?: string;
    PosiljkaJson?: string;
    PruzateljUslugeID?: string;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaLokacijaJson?: string;
    PosiljkaVrstaPosiljkeDodatneUslugeIDs?: string;
  }

  export const GetPosiljkaDetailsKey = 'Otprema2/GetPosiljkaDetails';
  export interface GetPosiljkaDetails {
    PosiljkaID?: string;
  }

  export const PosiljkaNewDetailsKey = 'Otprema2/PosiljkaNewDetails';
  export interface PosiljkaNewDetails {
    ID?: string;
    PosiljkaJson?: string;
    PruzateljUslugeID?: string;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaLokacijaJson?: string;
    PosiljkaVrstaPosiljkeDodatneUslugeIDs?: string;
    SadrzajIDsJsonList?: string;
  }

  export const GetByUputaZaOtpremuKey = 'Otprema2/GetByUputaZaOtpremu';
  export interface GetByUputaZaOtpremu {
    UputaZaOtpremuID?: string;
  }

  export const ZadnjeKreiranePosiljkeZaposlenikKey =
    'Otprema2/ZadnjeKreiranePosiljkeZaposlenik';
  export interface ZadnjeKreiranePosiljkeZaposlenik {
    ID?: string;
    PosiljkaID?: string;
    ZaposlenikID?: string;
  }

  export const GetZadnjeKreiranePosiljkeComputedKey =
    'Otprema2/GetZadnjeKreiranePosiljkeComputed';
  export interface GetZadnjeKreiranePosiljkeComputed {
    ID?: string;
  }

  export const PosiljkaAdresaSubjektKey = 'Otprema2/PosiljkaAdresaSubjekt';
  export interface PosiljkaAdresaSubjekt {
    ID?: string;
    NP?: string;
    UlicaIKucniBroj?: string;
    NaseljeID: string;
  }

  export const PosiljkaAdresaLokacijaKey = 'Otprema2/PosiljkaAdresaLokacija';
  export interface PosiljkaAdresaLokacija {
    ID?: string;
    NP?: string;
    LokacijaID: string;
  }

  export const SetPosiljkeAdresaSubjektKey =
    'Otprema2/SetPosiljkeAdresaSubjekt';
  export interface SetPosiljkeAdresaSubjekt {
    PosiljkeIDsJson?: string;
    PosiljkaAdresaSubjektJson?: string;
    SetAsDetaultSubjektAdresa?: boolean;
    SetAdresaFromSubjektDefaultAdresa?: boolean;
  }

  export const SetPosiljkeAdresaKey = 'Otprema2/SetPosiljkeAdresa';
  export interface SetPosiljkeAdresa {
    PosiljkeIDsJson?: string;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaSubjektSetAsDefaultAdresa?: boolean;
    SetAdresaFromSubjektDefaultAdresa?: boolean;
    PosiljkaAdresaLokacijaJson?: string;
  }

  export const PosiljkaBrowseBaseKey = 'Otprema2/PosiljkaBrowseBase';
  export interface PosiljkaBrowseBase {
    ID?: string;
    FTSID?: number;
    BrojPosiljke?: string;
    Primatelj?: string;
    Adresa?: string;
    NP?: string;
    BrojPreporuke?: string;
    PruzateljUsluge?: string;
    VrstaPosiljke?: string;
    IspisOmotnice?: string;
    IspisOmotniceID?: string;
    Kreirao?: string;
    Lokacija?: string;
    Kreirano?: Date;
    Zakljuceno?: Date;
    Napomena?: string;
    SadrzajCount?: number;
    DatumZadnjegIspisa?: Date;
    KreiraoReferenceID?: string;
    StatusPosiljkeID?: string;
  }

  export const PosiljkaBrowseKey = 'Otprema2/PosiljkaBrowse';
  export interface PosiljkaBrowse {
    ID?: string;
    BrojPosiljke?: string;
    Primatelj?: string;
    Adresa?: string;
    NP?: string;
    BrojPreporuke?: string;
    PruzateljUsluge?: string;
    VrstaPosiljke?: string;
    IspisOmotnice?: string;
    IspisOmotniceID?: string;
    Kreirao?: string;
    Lokacija?: string;
    Kreirano?: Date;
    Zakljuceno?: Date;
    Napomena?: string;
    StatusPosiljkeID?: string;
    SadrzajCount?: number;
    Status?: string;
  }

  export const PosiljkaBrowseSearchKey = 'Otprema2/PosiljkaBrowseSearch';
  export interface PosiljkaBrowseSearch {
    StatusPosiljkeIDs?: string;
    StatusNaziv?: string;
  }

  export const PosiljkaLookupKey = 'Otprema2/PosiljkaLookup';
  export interface PosiljkaLookup {
    ID?: string;
    Broj?: string;
  }

  export const PosiljkaDodatnaUslugaKey = 'Otprema2/PosiljkaDodatnaUsluga';
  export interface PosiljkaDodatnaUsluga {
    ID?: string;
    PosiljkaID: string;
    DodatnaUslugaID: string;
  }

  export const SetPosiljkaDodatneUslugeKey =
    'Otprema2/SetPosiljkaDodatneUsluge';
  export interface SetPosiljkaDodatneUsluge {
    PosiljkaID?: string;
    DodatneUslugeIDsJson?: string;
    VrstaPosiljkeDodatneUslugeIDsJson?: string;
  }

  export const ComputePosiljkaFTSKey = 'Otprema2/ComputePosiljkaFTS';
  export interface ComputePosiljkaFTS {
    ID?: string;
    FTSID?: number;
    NP?: string;
    Adresa?: string;
    Primatelj?: string;
    BrojPreporuke?: string;
    BrojPosiljke?: string;
  }

  export const PosiljkaFTSKey = 'Otprema2/PosiljkaFTS';
  export interface PosiljkaFTS {
    ID?: string;
    FTSID: number;
    NP?: string;
    Adresa?: string;
    Primatelj?: string;
    BrojPreporuke?: string;
    BrojPosiljke?: string;
    KlasifikacijskeOznake?: string;
    UrBrojevi?: string;
    SadrzajCount?: number;
  }

  export const SadrzajPosiljkeKey = 'Otprema2/SadrzajPosiljke';
  export interface SadrzajPosiljke {
    ID?: string;
    PosiljkaID: string;
    SadrzajID: string;
  }

  export const PosiljkaBrowseAdvancedSerachKey =
    'Otprema2/PosiljkaBrowseAdvancedSerach';
  export interface PosiljkaBrowseAdvancedSerach {
    Pattern?: string;
    Primatelj?: string;
    NP?: string;
    Adresa?: string;
    BrojPreporuke?: string;
    KlasifikacijskaOznaka?: string;
    UrBroj?: string;
    StatusPosiljkeIds?: string;
    BrojPosiljke?: string;
    KreiranoOd?: Date;
    KreiranoDo?: Date;
    ZakljucenoOd?: Date;
    ZakljucenoDo?: Date;
    IspisOmotniceIDs?: string;
    Ispisano?: boolean;
    PruzateljUslugeID?: string;
    VrstePosiljakaIDs?: string;
    DodatneUslugeIDs?: string;
    Kreirao?: string;
    LokacijaIDs?: string;
    ActiveOnly?: boolean;
    Page?: number;
    PageSize?: number;
  }

  export const ComputePosiljkaBrojacKey = 'Otprema2/ComputePosiljkaBrojac';
  export interface ComputePosiljkaBrojac {
    ID?: string;
    BrojPosiljkiUGodini?: number;
    Godina?: number;
  }

  export const PosiljkaBrojacKey = 'Otprema2/PosiljkaBrojac';
  export interface PosiljkaBrojac {
    ID?: string;
    BrojPosiljkiUGodini?: number;
    Godina?: number;
  }

  export const ComputeDostavaObavljenaTPPKey =
    'Otprema2/ComputeDostavaObavljenaTPP';
  export interface ComputeDostavaObavljenaTPP {
    ID?: string;
    DatumDostave?: Date;
    DostavuPotvrdioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    DostavaObavljenaID?: string;
  }

  export const DostavaObavljenaTPP_MaterializedKey =
    'Otprema2/DostavaObavljenaTPP_Materialized';
  export interface DostavaObavljenaTPP_Materialized {
    ID?: string;
    DatumDostave?: Date;
    DostavuPotvrdioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    DostavaObavljenaID?: string;
  }

  export const ComputePonistavanjeDostaveTPPKey =
    'Otprema2/ComputePonistavanjeDostaveTPP';
  export interface ComputePonistavanjeDostaveTPP {
    ID?: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    PonistavanjeDostaveID?: string;
  }

  export const PonistavanjeDostaveTPP_MaterializedKey =
    'Otprema2/PonistavanjeDostaveTPP_Materialized';
  export interface PonistavanjeDostaveTPP_Materialized {
    ID?: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    PonistavanjeDostaveID?: string;
  }

  export const ComputePosiljkaPonistenoZakljucivanjeTPPKey =
    'Otprema2/ComputePosiljkaPonistenoZakljucivanjeTPP';
  export interface ComputePosiljkaPonistenoZakljucivanjeTPP {
    ID?: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    PosiljkaPonistenoZakljucivanjeID?: string;
  }

  export const PosiljkaPonistenoZakljucivanjeTPP_MaterializedKey =
    'Otprema2/PosiljkaPonistenoZakljucivanjeTPP_Materialized';
  export interface PosiljkaPonistenoZakljucivanjeTPP_Materialized {
    ID?: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID?: string;
    PismenoID?: string;
    PosiljkaPonistenoZakljucivanjeID?: string;
  }

  export const ComputePosiljkaZakljucivanjeTPPKey =
    'Otprema2/ComputePosiljkaZakljucivanjeTPP';
  export interface ComputePosiljkaZakljucivanjeTPP {
    ID?: string;
    DatumZakljucivanja?: Date;
    ZakljucioID?: string;
    DatumOtpreme?: Date;
    PosiljkaID?: string;
    PismenoID?: string;
    PosiljkaZakljucenaID?: string;
  }

  export const PosiljkaZakljucivanjeTPP_MaterializedKey =
    'Otprema2/PosiljkaZakljucivanjeTPP_Materialized';
  export interface PosiljkaZakljucivanjeTPP_Materialized {
    ID?: string;
    DatumZakljucivanja?: Date;
    ZakljucioID?: string;
    DatumOtpreme?: Date;
    PosiljkaID?: string;
    PismenoID?: string;
    PosiljkaZakljucenaID?: string;
  }

  export const AllowPosiljkaPermissionsKey =
    'Otprema2/AllowPosiljkaPermissions';
  export interface AllowPosiljkaPermissions {
    ZaposlenikID?: string;
    PosiljkaID?: string;
    Subtype?: string;
    PosiljkaRadomUpravljaPravaPristupaID?: string;
    PosiljkaOvlasteniSluzbeniciUJID?: string;
    PredmetiPravoUvidaSluzbeniciUJID?: string;
    PosiljkaKreiraoPosiljkuID?: string;
    KorisniciSPravimaNadZapisimaNekogDjelatnikaKorisniciSPravimaNadZapisimaNekogDjelatnikaID?: string;
    KorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaKorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaID?: string;
  }

  export const DenyPosiljkaPermissionsKey = 'Otprema2/DenyPosiljkaPermissions';
  export interface DenyPosiljkaPermissions {
    ZaposlenikID?: string;
    PosiljkaID?: string;
    Subtype?: string;
    DenyPosiljkaPermissionsPovjerljiviUrudzbeniPovjerljiviUrudzbeniID?: string;
  }

  export const PosiljkaPermissionsKey = 'Otprema2/PosiljkaPermissions';
  export interface PosiljkaPermissions {
    ID?: string;
    ZaposlenikID?: string;
    PosiljkaID?: string;
  }

  export const PosiljkaRadomUpravljaPravaPristupaKey =
    'Otprema2/PosiljkaRadomUpravljaPravaPristupa';
  export interface PosiljkaRadomUpravljaPravaPristupa {
    ID?: string;
  }

  export const PosiljkaOvlasteniSluzbeniciUJKey =
    'Otprema2/PosiljkaOvlasteniSluzbeniciUJ';
  export interface PosiljkaOvlasteniSluzbeniciUJ {
    ID?: string;
  }

  export const PredmetiPravoUvidaSluzbeniciUJKey =
    'Otprema2/PredmetiPravoUvidaSluzbeniciUJ';
  export interface PredmetiPravoUvidaSluzbeniciUJ {
    ID?: string;
  }

  export const KorisniciSPravimaNadZapisimaNekogDjelatnikaKey =
    'Otprema2/KorisniciSPravimaNadZapisimaNekogDjelatnika';
  export interface KorisniciSPravimaNadZapisimaNekogDjelatnika {
    ID?: string;
  }

  export const KorisniciSPravimaUvidaNadZapisimaNekogDjelatnikaKey =
    'Otprema2/KorisniciSPravimaUvidaNadZapisimaNekogDjelatnika';
  export interface KorisniciSPravimaUvidaNadZapisimaNekogDjelatnika {
    ID?: string;
  }

  export const PrimateljKey = 'Otprema2/Primatelj';
  export interface Primatelj {
    ID?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
    Adresa?: string;
    Tip?: string;
    Active?: boolean;
  }

  export const PrimateljLookupKey = 'Otprema2/PrimateljLookup';
  export interface PrimateljLookup {
    ID?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
    Adresa?: string;
    Tip?: string;
    Active?: boolean;
  }

  export const PrimateljLookupSearchKey = 'Otprema2/PrimateljLookupSearch';
  export interface PrimateljLookupSearch {
    Pattern?: string;
    PageSize: number;
  }

  export const PrimateljWithGrupaPrimateljaKey =
    'Otprema2/PrimateljWithGrupaPrimatelja';
  export interface PrimateljWithGrupaPrimatelja {
    ID?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
    Adresa?: string;
    Tip?: string;
    Active?: boolean;
  }

  export const PrimateljWithGrupaPrimateljaLookupKey =
    'Otprema2/PrimateljWithGrupaPrimateljaLookup';
  export interface PrimateljWithGrupaPrimateljaLookup {
    ID?: string;
    Naziv?: string;
    BrojcanaOznaka?: string;
    Adresa?: string;
    Tip?: string;
    Active?: boolean;
  }

  export const PrimateljWithGrupaPrimateljaLookupSearchKey =
    'Otprema2/PrimateljWithGrupaPrimateljaLookupSearch';
  export interface PrimateljWithGrupaPrimateljaLookupSearch {
    Pattern?: string;
    TipPrimateljaID?: string;
    PageSize: number;
  }

  export const PrimateljWithGrupaPrimateljaLookupSearchGenericSearchKey =
    'Otprema2/PrimateljWithGrupaPrimateljaLookupSearchGenericSearch';
  export interface PrimateljWithGrupaPrimateljaLookupSearchGenericSearch {
    Pattern?: string;
    FilterSubjekt?: boolean;
    FilterZaposlenik?: boolean;
    FilterUstrojstvenaJedinica?: boolean;
    FilterGrupaPrimatelja?: boolean;
    FilterAktivan?: boolean;
    PageSize: number;
  }

  export const TipPrimateljaKey = 'Otprema2/TipPrimatelja';
  export interface TipPrimatelja {
    ID?: string;
    Naziv?: string;
    FilterSubjekt?: boolean;
    FilterZaposlenik?: boolean;
    FilterUstrojstvenaJedinica?: boolean;
    FilterGrupaPrimatelja?: boolean;
  }

  export const PosiljkaObrisanaKey = 'Otprema2/PosiljkaObrisana';
  export interface PosiljkaObrisana {
    ID?: string;
    DatumKreiranja?: Date;
    KreiraoID?: string;
    PosiljkaID: string;
    RazlogBrisanja?: string;
  }

  export const ValidForPosiljkaBrisanjeKey =
    'Otprema2/ValidForPosiljkaBrisanje';
  export interface ValidForPosiljkaBrisanje {}

  export const DostavaObavljenaKey = 'Otprema2/DostavaObavljena';
  export interface DostavaObavljena {
    ID?: string;
    DatumDostave?: Date;
    DostavuPotvrdioID?: string;
    PosiljkaID: string;
  }

  export const ValidForDostavaObavljenaKey =
    'Otprema2/ValidForDostavaObavljena';
  export interface ValidForDostavaObavljena {}

  export const SadrzajPosiljkePismenoValidForDostavaObavljenaKey =
    'Otprema2/SadrzajPosiljkePismenoValidForDostavaObavljena';
  export interface SadrzajPosiljkePismenoValidForDostavaObavljena {}

  export const PosiljkaDostavaObavljenaNotValidForDostavaObavljenaKey =
    'Otprema2/PosiljkaDostavaObavljenaNotValidForDostavaObavljena';
  export interface PosiljkaDostavaObavljenaNotValidForDostavaObavljena {
    ID?: string;
    StatusPismenaNaziv?: string;
    PismenoUrudzbeniBroj?: string;
    PismenoKlasifikacijskaOznaka?: string;
  }

  export const PosiljkaIspisOmotniceKey = 'Otprema2/PosiljkaIspisOmotnice';
  export interface PosiljkaIspisOmotnice {
    ID?: string;
    DatumIspisa?: Date;
    IspisaoID?: string;
    PosiljkaID: string;
  }

  export const ValidForIspisOmotniceKey = 'Otprema2/ValidForIspisOmotnice';
  export interface ValidForIspisOmotnice {}

  export const InsertPosiljkaIspisOmotniceKey =
    'Otprema2/InsertPosiljkaIspisOmotnice';
  export interface InsertPosiljkaIspisOmotnice {
    PosiljkaIDs?: string;
  }

  export const PosiljkaPonistenoBrisanjeKey =
    'Otprema2/PosiljkaPonistenoBrisanje';
  export interface PosiljkaPonistenoBrisanje {
    ID?: string;
    DatumKreiranja?: Date;
    KreiraoID?: string;
    PosiljkaID: string;
  }

  export const ValidForPosiljkaPonistavanjeBrisanjaKey =
    'Otprema2/ValidForPosiljkaPonistavanjeBrisanja';
  export interface ValidForPosiljkaPonistavanjeBrisanja {}

  export const SadrzajPosiljkeNeaktivanPosiljkaPonistiBrisanjeKey =
    'Otprema2/SadrzajPosiljkeNeaktivanPosiljkaPonistiBrisanje';
  export interface SadrzajPosiljkeNeaktivanPosiljkaPonistiBrisanje {}

  export const PonistavanjeDostaveKey = 'Otprema2/PonistavanjeDostave';
  export interface PonistavanjeDostave {
    ID?: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID: string;
  }

  export const ValidForPonistavanjeDostaveKey =
    'Otprema2/ValidForPonistavanjeDostave';
  export interface ValidForPonistavanjeDostave {}

  export const PosiljkaPonistenoZakljucivanjeKey =
    'Otprema2/PosiljkaPonistenoZakljucivanje';
  export interface PosiljkaPonistenoZakljucivanje {
    ID?: string;
    DatumPonistavanja?: Date;
    PonistioID?: string;
    PosiljkaID: string;
  }

  export const ValidForPosiljkaPonistenoZakljucivanjeKey =
    'Otprema2/ValidForPosiljkaPonistenoZakljucivanje';
  export interface ValidForPosiljkaPonistenoZakljucivanje {}

  export const PosiljkaZakljucenaKey = 'Otprema2/PosiljkaZakljucena';
  export interface PosiljkaZakljucena {
    ID?: string;
    DatumZakljucivanja?: Date;
    ZakljucioID?: string;
    PosiljkaID: string;
    DatumOtpreme: Date;
  }

  export const ValidForPosiljkaZakljucivanjeKey =
    'Otprema2/ValidForPosiljkaZakljucivanje';
  export interface ValidForPosiljkaZakljucivanje {}

  export const SadrzajPosiljkeNeaktivanPosiljkaZakljucavanjeKey =
    'Otprema2/SadrzajPosiljkeNeaktivanPosiljkaZakljucavanje';
  export interface SadrzajPosiljkeNeaktivanPosiljkaZakljucavanje {}

  export const SadrzajPosiljkePismenoValidForOtpremanjeKey =
    'Otprema2/SadrzajPosiljkePismenoValidForOtpremanje';
  export interface SadrzajPosiljkePismenoValidForOtpremanje {}

  export const PosiljkaZakljucenaNotValidForOtpremanjeKey =
    'Otprema2/PosiljkaZakljucenaNotValidForOtpremanje';
  export interface PosiljkaZakljucenaNotValidForOtpremanje {
    ID?: string;
    StatusPismenaNaziv?: string;
    PismenoUrudzbeniBroj?: string;
    PismenoKlasifikacijskaOznaka?: string;
  }

  export const SadrzajPosiljkeNeaktivanKey =
    'Otprema2/SadrzajPosiljkeNeaktivan';
  export interface SadrzajPosiljkeNeaktivan {}

  export const SadrzajPosiljkeBrowseKey = 'Otprema2/SadrzajPosiljkeBrowse';
  export interface SadrzajPosiljkeBrowse {
    ID?: string;
    PosiljkaID?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrBroj?: string;
    PismenoPrilogNaziv?: string;
    SubjektNaziv?: string;
    Tip?: string;
    EntityID?: string;
  }

  export const PismenoPrilogBrowseKey = 'Otprema2/PismenoPrilogBrowse';
  export interface PismenoPrilogBrowse {
    ID?: string;
    KlasifikacijskaOznaka?: string;
    PredmetNaziv?: string;
    UrBroj?: string;
    PismenoPrilogNaziv?: string;
    SubjektNaziv?: string;
    Tip?: string;
  }

  export const PismenoPrilogBrowseThisIDsOnlyKey =
    'Otprema2/PismenoPrilogBrowseThisIDsOnly';
  export interface PismenoPrilogBrowseThisIDsOnly {
    IDListJson?: string;
  }

  export const StanjePosiljkePrijeDogadjajaKey =
    'Otprema2/StanjePosiljkePrijeDogadjaja';
  export interface StanjePosiljkePrijeDogadjaja {
    ID?: string;
    PrethodniStatusPosiljkeID?: string;
    PrethodniTppID?: string;
    PrethodniTppSaStatusomID?: string;
  }

  export const StatusPosiljkeKey = 'Otprema2/StatusPosiljke';
  export interface StatusPosiljke {
    ID?: string;
    Naziv: string;
    ValidForKreiranje?: boolean;
    ValidForUredjivanje?: boolean;
    ValidForBrisanje?: boolean;
    ValidForPonistavanjeBrisanja?: boolean;
    ValidForZakljucivanje?: boolean;
    ValidForPonistavanjeZakljucivanja?: boolean;
    ValidForDostavaObavljena?: boolean;
    ValidForPonistavanjeDostave?: boolean;
    ValidForIspisOmotnice?: boolean;
  }

  export const TijekPostupanjaPosiljkaKey = 'Otprema2/TijekPostupanjaPosiljka';
  export interface TijekPostupanjaPosiljka {
    DatumVrijeme?: Date;
    KorisnikID?: string;
    PosiljkaID?: string;
    StatusPosiljkeID?: string;
    Opis?: string;
    Subtype?: string;
    PosiljkaObrisanaID?: string;
    DostavaObavljenaID?: string;
    PosiljkaIspisOmotniceID?: string;
    PosiljkaPonistenoBrisanjeID?: string;
    PonistavanjeDostaveID?: string;
    PosiljkaPonistenoZakljucivanjeID?: string;
    PosiljkaZakljucenaID?: string;
    PosiljkaKreiranjePosiljkeID?: string;
  }

  export const TijekPostupanjaPosiljka_MaterializedKey =
    'Otprema2/TijekPostupanjaPosiljka_Materialized';
  export interface TijekPostupanjaPosiljka_Materialized {
    ID?: string;
    DatumVrijeme?: Date;
    PosiljkaID?: string;
    StatusPosiljkeID?: string;
  }

  export const TijekPostupanjaPosiljkaStatusKey =
    'Otprema2/TijekPostupanjaPosiljkaStatus';
  export interface TijekPostupanjaPosiljkaStatus {
    ID?: string;
    StatusPosiljkeID?: string;
  }

  export const TrenutnoStanjePosiljkeKey = 'Otprema2/TrenutnoStanjePosiljke';
  export interface TrenutnoStanjePosiljke {
    ID?: string;
    ZadnjiTppID?: string;
    StatusPosiljkeID?: string;
    DatumOtpreme?: Date;
    DatumZadnjegIspisa?: Date;
  }

  export const TrenutnoStanjePosiljkeComputedKey =
    'Otprema2/TrenutnoStanjePosiljkeComputed';
  export interface TrenutnoStanjePosiljkeComputed {
    ID?: string;
    StatusPosiljkeID?: string;
    DatumOtpreme?: Date;
    DatumZadnjegIspisa?: Date;
    NivoStupnjaTajnosti?: number;
    StupanjTajnostiID?: string;
  }

  export const TrenutnoStanjePosiljke_MaterializedKey =
    'Otprema2/TrenutnoStanjePosiljke_Materialized';
  export interface TrenutnoStanjePosiljke_Materialized {
    ID?: string;
    DatumOtpreme?: Date;
    DatumZadnjegIspisa?: Date;
    NivoStupnjaTajnosti?: number;
    StatusPosiljkeID?: string;
    StupanjTajnostiID?: string;
  }

  export const UpdatePosiljkaKey = 'Otprema2/UpdatePosiljka';
  export interface UpdatePosiljka {
    PosiljkaID: string;
    PrimateljID?: string;
    Broj?: string;
    VrstaPosiljkeID?: string;
    IspisOmotniceID?: string;
    Masa?: number;
    BrojOmotnica?: number;
    Cijena?: number;
    Vrijednost?: number;
    Napomena?: string;
    BrojPreporuke?: string;
    OmotnicaZapecacena?: boolean;
    PogresnoDostavljena?: boolean;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaLokacijaJson?: string;
    PosiljkaVrstaPosiljkeDodatneUslugeIDsJson?: string;
    PosiljkaAdresaSubjektSetAsDefaultAdresa?: boolean;
  }

  export const UputaZaOtpremuKey = 'Otprema2/UputaZaOtpremu';
  export interface UputaZaOtpremu {
    ID?: string;
    PrimateljID?: string;
    PruzateljUslugeID?: string;
    VrstaPosiljkeID?: string;
    IspisOmotniceID?: string;
    Masa?: number;
    BrojOmotnica?: number;
    Cijena?: number;
    Vrijednost?: number;
    Napomena?: string;
    BrojPreporuke?: string;
    PogresnoDostavljena?: boolean;
    StvarateljID?: string;
    DatumUnosa?: Date;
  }

  export const GetZadnjeKreiraneUputaZaOtpremuComputedKey =
    'Otprema2/GetZadnjeKreiraneUputaZaOtpremuComputed';
  export interface GetZadnjeKreiraneUputaZaOtpremuComputed {
    ID?: string;
  }

  export const GetKey = 'Otprema2/Get';
  export interface Get {
    PismenoIDs?: string;
  }

  export const UputaZaOtpremuAdresaSubjektKey =
    'Otprema2/UputaZaOtpremuAdresaSubjekt';
  export interface UputaZaOtpremuAdresaSubjekt {
    ID?: string;
    NP?: string;
    UlicaIKucniBroj?: string;
    NaseljeID?: string;
  }

  export const UputaZaOtpremuAdresaLokacijaKey =
    'Otprema2/UputaZaOtpremuAdresaLokacija';
  export interface UputaZaOtpremuAdresaLokacija {
    ID?: string;
    NP?: string;
    LokacijaID?: string;
  }

  export const ValidForUputaEditKey = 'Otprema2/ValidForUputaEdit';
  export interface ValidForUputaEdit {}

  export const SetUputaZaOtpremuAdresaSubjektKey =
    'Otprema2/SetUputaZaOtpremuAdresaSubjekt';
  export interface SetUputaZaOtpremuAdresaSubjekt {
    UputaZaOtpremuID?: string;
    UputaZaOtpremuAdresaSubjektJson?: string;
    SetAsDetaultSubjektAdresa?: boolean;
    SetAdresaFromSubjektDefaultAdresa?: boolean;
  }

  export const SetUputaZaOtpremuAdresaKey = 'Otprema2/SetUputaZaOtpremuAdresa';
  export interface SetUputaZaOtpremuAdresa {
    UputaZaOtpremuID?: string;
    UputaZaOtpremuAdresaSubjektJson?: string;
    UputaZaOtpremuAdresaSubjektSetAsDefaultAdresa?: boolean;
    SetAdresaFromSubjektDefaultAdresa?: boolean;
    UputaZaOtpremuAdresaLokacijaJson?: string;
  }

  export const UputaZaOtpremuBrisanjeEventKey =
    'Otprema2/UputaZaOtpremuBrisanjeEvent';
  export interface UputaZaOtpremuBrisanjeEvent {
    ID?: string;
    UputaZaOtpremuID: string;
    Napomena?: string;
    StvarateljID?: string;
    DatumUnosa?: Date;
  }

  export const ValidForUputaBrisanjeKey = 'Otprema2/ValidForUputaBrisanje';
  export interface ValidForUputaBrisanje {}

  export const UputaZaOtpremuBrowseBaseKey =
    'Otprema2/UputaZaOtpremuBrowseBase';
  export interface UputaZaOtpremuBrowseBase {
    ID?: string;
    PrimateljNaziv?: string;
    Adresa?: string;
    NP?: string;
    BrojPreporuke?: string;
    PruzateljUslugeNaziv?: string;
    VrstaPosiljkeNaziv?: string;
    IspisOmotniceNaziv?: string;
    KreiraoNaziv?: string;
    LokacijaNaziv?: string;
    DatumKreiranja?: Date;
    Napomena?: string;
    StatusNaziv?: string;
    BrojPosiljke?: string;
    StatusID?: string;
    LokacijaID?: string;
  }

  export const UputaZaOtpremuBrowseKey = 'Otprema2/UputaZaOtpremuBrowse';
  export interface UputaZaOtpremuBrowse {
    ID?: string;
    PrimateljNaziv?: string;
    Adresa?: string;
    NP?: string;
    BrojPreporuke?: string;
    PruzateljUslugeNaziv?: string;
    VrstaPosiljkeNaziv?: string;
    IspisOmotniceNaziv?: string;
    KreiraoNaziv?: string;
    LokacijaNaziv?: string;
    DatumKreiranja?: Date;
    Napomena?: string;
    StatusNaziv?: string;
    StatusID?: string;
    BrojPosiljke?: string;
  }

  export const UputaZaOtpremuBrowseAdvancedSearchKey =
    'Otprema2/UputaZaOtpremuBrowseAdvancedSearch';
  export interface UputaZaOtpremuBrowseAdvancedSearch {
    Pattern?: string;
    PrimateljNaziv?: string;
    NP?: string;
    Adresa?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    StatusUputeIDs?: string;
    BrojPreporuke?: string;
    DatumKreiranjaOd?: Date;
    DatumKreiranjaDo?: Date;
    IspisOmotniceIDs?: string;
    JeIspisano?: boolean;
    PruzateljUslugeID?: string;
    VrstaPosiljkeIDs?: string;
    DodatneUslugeIDs?: string;
    KreiraoNaziv?: string;
    LokacijaIDs?: string;
    BrojPosiljke?: string;
  }

  export const UputaZaOtpremuDodatnaUslugaKey =
    'Otprema2/UputaZaOtpremuDodatnaUsluga';
  export interface UputaZaOtpremuDodatnaUsluga {
    ID?: string;
    UputaZaOtpremuID: string;
    DodatnaUslugaID: string;
  }

  export const SetUputaZaOtpremuDodatnaUslugaKey =
    'Otprema2/SetUputaZaOtpremuDodatnaUsluga';
  export interface SetUputaZaOtpremuDodatnaUsluga {
    UputaZaOtpremuID?: string;
    DodatneUslugeIDsJson?: string;
    VrstaPosiljkeDodatneUslugeIDsJson?: string;
  }

  export const UputaZaOtpremuEventDataKey = 'Otprema2/UputaZaOtpremuEventData';
  export interface UputaZaOtpremuEventData {
    ID?: string;
    ZadnjiEventID?: string;
    StatusID?: string;
  }

  export const UputaZaOtpremuEventLogKey = 'Otprema2/UputaZaOtpremuEventLog';
  export interface UputaZaOtpremuEventLog {
    KorisnikID: string;
    DatumVrijeme?: Date;
    UputaZaOtpremuID?: string;
    StatusID?: string;
    Subtype?: string;
    UputaZaOtpremuBrisanjeEventID?: string;
    UputaZaOtpremuIspisOmotniceID?: string;
    UputaZaOtpremuPonistiBrisanjeEventID?: string;
    UputaZaOtpremuUpisEventID?: string;
    UputaZaOtpremuKreiranjeID?: string;
  }

  export const UputaZaOtpremuDefaultPrimateljKey =
    'Otprema2/UputaZaOtpremuDefaultPrimatelj';
  export interface UputaZaOtpremuDefaultPrimatelj {
    ID?: string;
    PrimateljID?: string;
  }

  export const UputaZaOtpremuIspisOmotniceKey =
    'Otprema2/UputaZaOtpremuIspisOmotnice';
  export interface UputaZaOtpremuIspisOmotnice {
    ID?: string;
    UputaZaOtpremuID: string;
    StvarateljID?: string;
    DatumUnosa?: Date;
  }

  export const ComputeUputaZaOtpremuBrisanjeTPPKey =
    'Otprema2/ComputeUputaZaOtpremuBrisanjeTPP';
  export interface ComputeUputaZaOtpremuBrisanjeTPP {
    ID?: string;
    UputaZaOtpremuBrisanjeEventID?: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
    UputaZaOtpremuSadrzajID?: string;
  }

  export const UputaZaOtpremuBrisanjeTPP_MaterializedKey =
    'Otprema2/UputaZaOtpremuBrisanjeTPP_Materialized';
  export interface UputaZaOtpremuBrisanjeTPP_Materialized {
    ID?: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
    UputaZaOtpremuBrisanjeEventID?: string;
    UputaZaOtpremuSadrzajID?: string;
  }

  export const UputaZaOtpremuSadrzajInsertTPP_MaterializedKey =
    'Otprema2/UputaZaOtpremuSadrzajInsertTPP_Materialized';
  export interface UputaZaOtpremuSadrzajInsertTPP_Materialized {
    ID?: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
  }

  export const ComputeUputaZaOtpremuSadrzajInsertTPPKey =
    'Otprema2/ComputeUputaZaOtpremuSadrzajInsertTPP';
  export interface ComputeUputaZaOtpremuSadrzajInsertTPP {
    ID?: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
  }

  export const ComputeUputaZaOtpremuPonistavanjeBrisanjaTPPKey =
    'Otprema2/ComputeUputaZaOtpremuPonistavanjeBrisanjaTPP';
  export interface ComputeUputaZaOtpremuPonistavanjeBrisanjaTPP {
    ID?: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
    UputaZaOtpremuPonistiBrisanjeEventID?: string;
    UputaZaOtpremuSadrzajID?: string;
  }

  export const UputaZaOtpremuPonistiBrisanjeTPP_MaterializedKey =
    'Otprema2/UputaZaOtpremuPonistiBrisanjeTPP_Materialized';
  export interface UputaZaOtpremuPonistiBrisanjeTPP_Materialized {
    ID?: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    UputaZaOtpremuID?: string;
    PismenoID?: string;
    UputaZaOtpremuPonistiBrisanjeEventID?: string;
    UputaZaOtpremuSadrzajID?: string;
  }

  export const UputaZaOtpremuSadrzajUpisTPP_MaterializedKey =
    'Otprema2/UputaZaOtpremuSadrzajUpisTPP_Materialized';
  export interface UputaZaOtpremuSadrzajUpisTPP_Materialized {
    ID?: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    PismenoID?: string;
    UputaZaOtpremuUpisEventID?: string;
  }

  export const ComputeUputaZaOtpremuSadrzajUpisTPPKey =
    'Otprema2/ComputeUputaZaOtpremuSadrzajUpisTPP';
  export interface ComputeUputaZaOtpremuSadrzajUpisTPP {
    ID?: string;
    DatumUnosa?: Date;
    StvarateljID?: string;
    PismenoID?: string;
    UputaZaOtpremuUpisEventID?: string;
  }

  export const UputaZaOtpremuPonistiBrisanjeEventKey =
    'Otprema2/UputaZaOtpremuPonistiBrisanjeEvent';
  export interface UputaZaOtpremuPonistiBrisanjeEvent {
    ID?: string;
    UputaZaOtpremuID: string;
    Napomena?: string;
    StvarateljID?: string;
    DatumUnosa?: Date;
  }

  export const ValidForUputaPonistiBrisanjeKey =
    'Otprema2/ValidForUputaPonistiBrisanje';
  export interface ValidForUputaPonistiBrisanje {}

  export const UputaZaOtpremuSadrzajKey = 'Otprema2/UputaZaOtpremuSadrzaj';
  export interface UputaZaOtpremuSadrzaj {
    ID?: string;
    UputaZaOtpremuID: string;
    SadrzajID: string;
    DatumUnosa?: Date;
  }

  export const UputaZaOtpremuSadrzajNeaktivanKey =
    'Otprema2/UputaZaOtpremuSadrzajNeaktivan';
  export interface UputaZaOtpremuSadrzajNeaktivan {}

  export const PredmetStatusValidForKreirajUputuOtpremeKey =
    'Otprema2/PredmetStatusValidForKreirajUputuOtpreme';
  export interface PredmetStatusValidForKreirajUputuOtpreme {}

  export const PismenoStatusValidForKreirajUputuOtpremeKey =
    'Otprema2/PismenoStatusValidForKreirajUputuOtpreme';
  export interface PismenoStatusValidForKreirajUputuOtpreme {}

  export const SetUputaZaOtpremuSadrzajKey =
    'Otprema2/SetUputaZaOtpremuSadrzaj';
  export interface SetUputaZaOtpremuSadrzaj {
    UputaZaOtpremuID?: string;
    SadrzajIDsJson?: string;
  }

  export const UputaZaOtpremuStanjePrijeEventaKey =
    'Otprema2/UputaZaOtpremuStanjePrijeEventa';
  export interface UputaZaOtpremuStanjePrijeEventa {
    ID?: string;
    PrethodniEventID?: string;
    PrethodniEventSaStatusomID?: string;
    PrethodniStatusID?: string;
  }

  export const UputaZaOtpremuStatusKey = 'Otprema2/UputaZaOtpremuStatus';
  export interface UputaZaOtpremuStatus {
    ID?: string;
    Naziv: string;
    ValidForBrisanje?: boolean;
    ValidForPonistiBrisanje?: boolean;
    ValidForUputaUpisivanje?: boolean;
    ValidForUputaEdit?: boolean;
    ValidForIspisOmotnice?: boolean;
    Active?: boolean;
  }

  export const UputaZaOtpremuUpisEventKey = 'Otprema2/UputaZaOtpremuUpisEvent';
  export interface UputaZaOtpremuUpisEvent {
    ID?: string;
    UputaZaOtpremuID: string;
    StvarateljID?: string;
    DatumUnosa?: Date;
  }

  export const ValidForUputaUpisivanjeKey = 'Otprema2/ValidForUputaUpisivanje';
  export interface ValidForUputaUpisivanje {}

  export const UputaZaOtpremuUpisEventPosiljkaKey =
    'Otprema2/UputaZaOtpremuUpisEventPosiljka';
  export interface UputaZaOtpremuUpisEventPosiljka {
    ID?: string;
    UputaZaOtpremuUpisEventID: string;
    PosiljkaID: string;
  }

  export const UputaZaOtpremuUpisEventInsertKey =
    'Otprema2/UputaZaOtpremuUpisEventInsert';
  export interface UputaZaOtpremuUpisEventInsert {
    UputaZaOtpremuID: string;
    PosiljkeIDsJson: string;
  }

  export const UputaZaOtpremuUpsertKey = 'Otprema2/UputaZaOtpremuUpsert';
  export interface UputaZaOtpremuUpsert {
    UputaZaOtpremuID?: string;
    PrimateljID?: string;
    Broj?: string;
    PruzateljUslugeID?: string;
    VrstaPosiljkeID?: string;
    IspisOmotniceID?: string;
    Masa?: number;
    BrojOmotnica?: number;
    Cijena?: number;
    Vrijednost?: number;
    Napomena?: string;
    BrojPreporuke?: string;
    PogresnoDostavljena?: boolean;
    SadrzajIDsJsonList?: string;
    PosiljkaAdresaSubjektJson?: string;
    PosiljkaAdresaSubjektSetAsDefaultAdresa?: boolean;
    PosiljkaAdresaLokacijaJson?: string;
    PosiljkaVrstaPosiljkeDodatneUslugeIDsJson?: string;
  }

  export const RS_Koverte_VrstaIspisaKey = 'Otprema2/RS_Koverte_VrstaIspisa';
  export interface RS_Koverte_VrstaIspisa {
    ID?: string;
    Vrsta?: string;
  }

  export const RS_Lookup_FullUserNameKey = 'Otprema2/RS_Lookup_FullUserName';
  export interface RS_Lookup_FullUserName {
    ID?: string;
    UserName?: string;
    FullUserName?: string;
  }

  export const RS_Lookup_LokacijaKey = 'Otprema2/RS_Lookup_Lokacija';
  export interface RS_Lookup_Lokacija {
    ID?: string;
    RowNum?: number;
    Value?: string;
    Label?: string;
  }

  export const RS_Lookup_VrstaPosiljkeKey = 'Otprema2/RS_Lookup_VrstaPosiljke';
  export interface RS_Lookup_VrstaPosiljke {
    ID?: string;
    RowNum?: number;
    Value?: string;
    Label?: string;
  }

  export const DenyPosiljkaPermissionsPovjerljiviUrudzbeniKey =
    'Otprema2/DenyPosiljkaPermissionsPovjerljiviUrudzbeni';
  export interface DenyPosiljkaPermissionsPovjerljiviUrudzbeni {
    ID?: string;
  }

  export const GrupaPrimateljaLookupKey = 'Otprema2/GrupaPrimateljaLookup';
  export interface GrupaPrimateljaLookup {
    ID?: string;
    Naziv?: string;
  }

  export const PruzateljUslugeLookupKey = 'Otprema2/PruzateljUslugeLookup';
  export interface PruzateljUslugeLookup {
    ID?: string;
    Naziv?: string;
  }

  export const IspisOmotniceLookupKey = 'Otprema2/IspisOmotniceLookup';
  export interface IspisOmotniceLookup {
    ID?: string;
    Naziv?: string;
  }

  export const StatusPosiljkeLookupKey = 'Otprema2/StatusPosiljkeLookup';
  export interface StatusPosiljkeLookup {
    ID?: string;
    Naziv?: string;
  }

  export const Masa_MinValueFilterKey = 'Otprema2/Masa_MinValueFilter';
  export interface Masa_MinValueFilter {}

  export const BrojOmotnica_MinValueFilterKey =
    'Otprema2/BrojOmotnica_MinValueFilter';
  export interface BrojOmotnica_MinValueFilter {}

  export const Cijena_MinValueFilterKey = 'Otprema2/Cijena_MinValueFilter';
  export interface Cijena_MinValueFilter {}

  export const Vrijednost_MinValueFilterKey =
    'Otprema2/Vrijednost_MinValueFilter';
  export interface Vrijednost_MinValueFilter {}

  export const NegativnaCijenaUnutarnjiPrometKey =
    'Otprema2/NegativnaCijenaUnutarnjiPromet';
  export interface NegativnaCijenaUnutarnjiPromet {}

  export const NegativnaCijenaMedjunarodniPrometKey =
    'Otprema2/NegativnaCijenaMedjunarodniPromet';
  export interface NegativnaCijenaMedjunarodniPromet {}

  export const NegativnaVrijednostDoKey = 'Otprema2/NegativnaVrijednostDo';
  export interface NegativnaVrijednostDo {}

  export const NegativnaVrijednostOdKey = 'Otprema2/NegativnaVrijednostOd';
  export interface NegativnaVrijednostOd {}

  export const VrijednostOdVecaOdVrijednostDoKey =
    'Otprema2/VrijednostOdVecaOdVrijednostDo';
  export interface VrijednostOdVecaOdVrijednostDo {}

  export const NegativnaMasaDoKey = 'Otprema2/NegativnaMasaDo';
  export interface NegativnaMasaDo {}

  export const NegativnaMasaOdKey = 'Otprema2/NegativnaMasaOd';
  export interface NegativnaMasaOd {}

  export const MasaOdVecaOdMasaDoKey = 'Otprema2/MasaOdVecaOdMasaDo';
  export interface MasaOdVecaOdMasaDo {}

  export const UneseniMasaIVrijednostKey = 'Otprema2/UneseniMasaIVrijednost';
  export interface UneseniMasaIVrijednost {}

  export const InvalidPosiljkaAdresaSubjektByPrimateljKey =
    'Otprema2/InvalidPosiljkaAdresaSubjektByPrimatelj';
  export interface InvalidPosiljkaAdresaSubjektByPrimatelj {}

  export const InvalidPosiljkaAdresaLokacijaByPrimateljKey =
    'Otprema2/InvalidPosiljkaAdresaLokacijaByPrimatelj';
  export interface InvalidPosiljkaAdresaLokacijaByPrimatelj {}

  export const InvalidVrstaPosiljkePruzateljUslugeKey =
    'Otprema2/InvalidVrstaPosiljkePruzateljUsluge';
  export interface InvalidVrstaPosiljkePruzateljUsluge {}

  export const InvalidUputaZaOtpremuAdresaSubjektByPrimateljKey =
    'Otprema2/InvalidUputaZaOtpremuAdresaSubjektByPrimatelj';
  export interface InvalidUputaZaOtpremuAdresaSubjektByPrimatelj {}

  export const InvalidUputaZaOtpremuAdresaLokacijaByPrimateljKey =
    'Otprema2/InvalidUputaZaOtpremuAdresaLokacijaByPrimatelj';
  export interface InvalidUputaZaOtpremuAdresaLokacijaByPrimatelj {}

  export const SystemRequiredDatumKreiranjaKey =
    'Otprema2/SystemRequiredDatumKreiranja';
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredKreiraoKey = 'Otprema2/SystemRequiredKreirao';
  export interface SystemRequiredKreirao {}

  export const SystemRequiredDatumDostaveKey =
    'Otprema2/SystemRequiredDatumDostave';
  export interface SystemRequiredDatumDostave {}

  export const SystemRequiredDostavuPotvrdioKey =
    'Otprema2/SystemRequiredDostavuPotvrdio';
  export interface SystemRequiredDostavuPotvrdio {}

  export const SystemRequiredDatumIspisaKey =
    'Otprema2/SystemRequiredDatumIspisa';
  export interface SystemRequiredDatumIspisa {}

  export const SystemRequiredIspisaoKey = 'Otprema2/SystemRequiredIspisao';
  export interface SystemRequiredIspisao {}

  export const SystemRequiredDatumPonistavanjaKey =
    'Otprema2/SystemRequiredDatumPonistavanja';
  export interface SystemRequiredDatumPonistavanja {}

  export const SystemRequiredPonistioKey = 'Otprema2/SystemRequiredPonistio';
  export interface SystemRequiredPonistio {}

  export const SystemRequiredDatumZakljucivanjaKey =
    'Otprema2/SystemRequiredDatumZakljucivanja';
  export interface SystemRequiredDatumZakljucivanja {}

  export const SystemRequiredZakljucioKey = 'Otprema2/SystemRequiredZakljucio';
  export interface SystemRequiredZakljucio {}

  export const SystemRequiredDatumUnosaKey =
    'Otprema2/SystemRequiredDatumUnosa';
  export interface SystemRequiredDatumUnosa {}

  export const SystemRequiredFTSIDKey = 'Otprema2/SystemRequiredFTSID';
  export interface SystemRequiredFTSID {}

  export const SystemRequiredActiveKey = 'Otprema2/SystemRequiredActive';
  export interface SystemRequiredActive {}

  export const SystemRequiredGrupaPrimateljaKey =
    'Otprema2/SystemRequiredGrupaPrimatelja';
  export interface SystemRequiredGrupaPrimatelja {}
}

export module PovjerljiviUrudzbeni {
  export const StupanjTajnostiKey = 'PovjerljiviUrudzbeni/StupanjTajnosti';
  export interface StupanjTajnosti {
    ID?: string;
    Naziv: string;
    PrefiksKlasePredmeta: string;
    Nivo: number;
  }

  export const StupanjTajnostiLookupKey =
    'PovjerljiviUrudzbeni/StupanjTajnostiLookup';
  export interface StupanjTajnostiLookup {
    ID?: string;
    Naziv?: string;
    Nivo?: number;
  }

  export const DeklasifikacijaPredmetaMoguciStupnjeviTajnostiKey =
    'PovjerljiviUrudzbeni/DeklasifikacijaPredmetaMoguciStupnjeviTajnosti';
  export interface DeklasifikacijaPredmetaMoguciStupnjeviTajnosti {
    PredmetID?: string;
  }

  export const StupanjTajnostiLookupBezRowPermissionaKey =
    'PovjerljiviUrudzbeni/StupanjTajnostiLookupBezRowPermissiona';
  export interface StupanjTajnostiLookupBezRowPermissiona {
    ID?: string;
    Naziv?: string;
    Nivo?: number;
  }

  export const PismenoPromjenaStupnjaTajnostiKey =
    'PovjerljiviUrudzbeni/PismenoPromjenaStupnjaTajnosti';
  export interface PismenoPromjenaStupnjaTajnosti {
    ID?: string;
    PismenoID: string;
    StupanjTajnostiID: string;
    VrijemeKreiranja?: Date;
    KorisnikID?: string;
    Napomena?: string;
    TemeljemPismenaID?: string;
  }

  export const StupanjTajnostiPismenaComputedKey =
    'PovjerljiviUrudzbeni/StupanjTajnostiPismenaComputed';
  export interface StupanjTajnostiPismenaComputed {
    ID?: string;
    StupanjTajnostiID?: string;
  }

  export const PrilogPromjenaStupnjaTajnostiKey =
    'PovjerljiviUrudzbeni/PrilogPromjenaStupnjaTajnosti';
  export interface PrilogPromjenaStupnjaTajnosti {
    ID?: string;
    PrilogID: string;
    StupanjTajnostiID: string;
    VrijemeKreiranja?: Date;
    KorisnikID?: string;
    Napomena?: string;
    TemeljemPismenaID?: string;
  }

  export const StupanjTajnostiPredmetaComputedKey =
    'PovjerljiviUrudzbeni/StupanjTajnostiPredmetaComputed';
  export interface StupanjTajnostiPredmetaComputed {
    ID?: string;
    StupanjTajnostiID?: string;
  }

  export const StupanjTajnostiPrilogaComputedKey =
    'PovjerljiviUrudzbeni/StupanjTajnostiPrilogaComputed';
  export interface StupanjTajnostiPrilogaComputed {
    ID?: string;
    StupanjTajnostiID?: string;
  }

  export const PovezaniEntitetPredmetPromjenaStupnjaTajnostiKey =
    'PovjerljiviUrudzbeni/PovezaniEntitetPredmetPromjenaStupnjaTajnosti';
  export interface PovezaniEntitetPredmetPromjenaStupnjaTajnosti {
    PovezaniEntitetID?: string;
    PredmetID?: string;
    TemeljemPismenaID?: string;
    Napomena?: string;
    Subtype?: string;
    PismenoPromjenaStupnjaTajnostiID?: string;
    PrilogPromjenaStupnjaTajnostiID?: string;
  }

  export const PredmetPromjenaStupnjaTajnostiKey =
    'PovjerljiviUrudzbeni/PredmetPromjenaStupnjaTajnosti';
  export interface PredmetPromjenaStupnjaTajnosti {
    ID?: string;
    PredmetID: string;
    StupanjTajnostiID: string;
    KorisnikID?: string;
    VrijemeKreiranja?: Date;
    Napomena?: string;
    TemeljemPovezanogEntitetaID?: string;
  }

  export const DeklasifikacijaNijeMogucaNaStupanjManjiOdMaxStupnjaPovezanihEntitetaKey =
    'PovjerljiviUrudzbeni/DeklasifikacijaNijeMogucaNaStupanjManjiOdMaxStupnjaPovezanihEntiteta';
  export interface DeklasifikacijaNijeMogucaNaStupanjManjiOdMaxStupnjaPovezanihEntiteta {}

  export const ZaposlenikStupanjTajnostiKey =
    'PovjerljiviUrudzbeni/ZaposlenikStupanjTajnosti';
  export interface ZaposlenikStupanjTajnosti {
    ID?: string;
    ZaposlenikID?: string;
    StupanjTajnostiID: string;
    VrijediOd: Date;
    VrijediDo?: Date;
    DodijelioID?: string;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    ObrisaoID?: string;
    Active?: boolean;
  }

  export const ZaposlenikStupanjTajnostiBrowseBaseKey =
    'PovjerljiviUrudzbeni/ZaposlenikStupanjTajnostiBrowseBase';
  export interface ZaposlenikStupanjTajnostiBrowseBase {
    ID?: string;
    IsValid?: boolean;
  }

  export const ZaposlenikStupanjTajnostiBrowseKey =
    'PovjerljiviUrudzbeni/ZaposlenikStupanjTajnostiBrowse';
  export interface ZaposlenikStupanjTajnostiBrowse {
    ID?: string;
    VrijediOd?: Date;
    VrijediDo?: Date;
    Active?: boolean;
    ZaposlenikID?: string;
    DatumKreiranja?: Date;
    DatumBrisanja?: Date;
    StupanjTajnostiNaziv?: string;
    DodijelioNaziv?: string;
    ObrisaoNaziv?: string;
    IsValid?: boolean;
  }

  export const ProvjeraVrijediOdKey = 'PovjerljiviUrudzbeni/ProvjeraVrijediOd';
  export interface ProvjeraVrijediOd {}

  export const ProvjeraVrijediDoKey = 'PovjerljiviUrudzbeni/ProvjeraVrijediDo';
  export interface ProvjeraVrijediDo {}

  export const ZaposlenikStupanjTajnostiForPermissionsKey =
    'PovjerljiviUrudzbeni/ZaposlenikStupanjTajnostiForPermissions';
  export interface ZaposlenikStupanjTajnostiForPermissions {
    ID?: string;
    NivoStupnjaTajnosti?: number;
    StupanjTajnostiID?: string;
  }

  export const PismenoPromjenaStupnjaTajnostiBrowseKey =
    'PovjerljiviUrudzbeni/PismenoPromjenaStupnjaTajnostiBrowse';
  export interface PismenoPromjenaStupnjaTajnostiBrowse {
    ID?: string;
    DatumPromjene?: Date;
    StupanjTajnostiPrijePromjene?: string;
    StupanjTajnostiTemeljemPromjeneID?: string;
    StupanjTajnostiTemeljemPromjeneNaziv?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    Naziv?: string;
    DatumNastanka?: Date;
    Napomena?: string;
    Korisnik?: string;
    PismenoID?: string;
    JeIzmjenaStupnjaTajnostiPredmeta?: boolean;
    PredmetID?: string;
  }

  export const PrilogPromjenaStupnjaTajnostiBrowseKey =
    'PovjerljiviUrudzbeni/PrilogPromjenaStupnjaTajnostiBrowse';
  export interface PrilogPromjenaStupnjaTajnostiBrowse {
    ID?: string;
    DatumPromjene?: Date;
    StupanjTajnostiPrijePromjene?: string;
    StupanjTajnostiTemeljemPromjeneID?: string;
    StupanjTajnostiTemeljemPromjeneNaziv?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    Naziv?: string;
    DatumNastanka?: Date;
    Napomena?: string;
    Korisnik?: string;
    PrilogID?: string;
    JeIzmjenaStupnjaTajnostiPredmeta?: boolean;
    PredmetID?: string;
  }

  export const PredmetPromjenaStupnjaTajnostiBrowseKey =
    'PovjerljiviUrudzbeni/PredmetPromjenaStupnjaTajnostiBrowse';
  export interface PredmetPromjenaStupnjaTajnostiBrowse {
    ID?: string;
    DatumPromjene?: Date;
    StupanjTajnostiPrijePromjene?: string;
    StupanjTajnostiTemeljemPromjeneID?: string;
    StupanjTajnostiTemeljemPromjeneNaziv?: string;
    KlasifikacijskaOznaka?: string;
    UrudzbeniBroj?: string;
    Naziv?: string;
    DatumNastanka?: Date;
    Napomena?: string;
    Korisnik?: string;
    PredmetID?: string;
    PovezaniEntitetID?: string;
  }

  export const StupanjTajnostiPosiljkeComputedKey =
    'PovjerljiviUrudzbeni/StupanjTajnostiPosiljkeComputed';
  export interface StupanjTajnostiPosiljkeComputed {
    ID?: string;
    StupanjTajnostiID?: string;
  }

  export const PovezaniEntitetPredmetPromjenaStupnjaTajnosti_MaterializedKey =
    'PovjerljiviUrudzbeni/PovezaniEntitetPredmetPromjenaStupnjaTajnosti_Materialized';
  export interface PovezaniEntitetPredmetPromjenaStupnjaTajnosti_Materialized {
    ID?: string;
  }

  export const SystemRequiredVrijemeKreiranjaKey =
    'PovjerljiviUrudzbeni/SystemRequiredVrijemeKreiranja';
  export interface SystemRequiredVrijemeKreiranja {}

  export const SystemRequiredKorisnikKey =
    'PovjerljiviUrudzbeni/SystemRequiredKorisnik';
  export interface SystemRequiredKorisnik {}

  export const SystemRequiredDodijelioKey =
    'PovjerljiviUrudzbeni/SystemRequiredDodijelio';
  export interface SystemRequiredDodijelio {}

  export const SystemRequiredDatumKreiranjaKey =
    'PovjerljiviUrudzbeni/SystemRequiredDatumKreiranja';
  export interface SystemRequiredDatumKreiranja {}

  export const SystemRequiredActiveKey =
    'PovjerljiviUrudzbeni/SystemRequiredActive';
  export interface SystemRequiredActive {}

  export const SystemRequiredZaposlenikKey =
    'PovjerljiviUrudzbeni/SystemRequiredZaposlenik';
  export interface SystemRequiredZaposlenik {}
}

export module Reports {}

export module Otprema {}

export module Centrix2ImportPodataka {}

export module PovijestUvida {
  export const PovijestUvidaEntitetaKey = 'PovijestUvida/PovijestUvidaEntiteta';
  export interface PovijestUvidaEntiteta {
    ID?: string;
    ZaposlenikID?: string;
    EntitetID: string;
    Datum?: Date;
    Napomena?: string;
  }

  export const PovijestUvidaEntitetaBrowseBaseKey =
    'PovijestUvida/PovijestUvidaEntitetaBrowseBase';
  export interface PovijestUvidaEntitetaBrowseBase {
    ID?: string;
    EntitetID?: string;
    Datum?: Date;
    UserName?: string;
    Napomena?: string;
  }

  export const PovijestUvidaEntitetaBrowseKey =
    'PovijestUvida/PovijestUvidaEntitetaBrowse';
  export interface PovijestUvidaEntitetaBrowse {
    ID?: string;
    EntitetID?: string;
    Datum?: Date;
    UserName?: string;
    Napomena?: string;
  }

  export const SystemRequiredZaposlenikKey =
    'PovijestUvida/SystemRequiredZaposlenik';
  export interface SystemRequiredZaposlenik {}

  export const SystemRequiredDatumKey = 'PovijestUvida/SystemRequiredDatum';
  export interface SystemRequiredDatum {}
}

export module ZupIt {
  export const PostupakZupItInfoKey = 'ZupIt/PostupakZupItInfo';
  export interface PostupakZupItInfo {
    ID?: string;
    UlaziUZupIt?: boolean;
  }

  export const PostupakZupItKey = 'ZupIt/PostupakZupIt';
  export interface PostupakZupIt {
    ID?: string;
  }

  export const PostupakZupItPropertyKey = 'ZupIt/PostupakZupItProperty';
  export interface PostupakZupItProperty {
    ID?: string;
    PostupakZupItID?: string;
    Name?: string;
    Value?: string;
  }

  export const PostupakZupItPropertiesKey = 'ZupIt/PostupakZupItProperties';
  export interface PostupakZupItProperties {
    ID?: string;
  }

  export const ChangedSinceParametersKey = 'ZupIt/ChangedSinceParameters';
  export interface ChangedSinceParameters {
    ChangedSinceTime?: Date;
    CreatedAfterTime?: Date;
    MaxItems?: number;
  }

  export const PostupakKey = 'ZupIt/Postupak';
  export interface Postupak {
    ID?: string;
    PredmetID?: string;
    CreatedTime?: Date;
    LastChangeTime?: Date;
    Name?: string;
    Value?: string;
  }

  export const PostupakLastChangeTimeKey = 'ZupIt/PostupakLastChangeTime';
  export interface PostupakLastChangeTime {
    ID?: string;
    LastChangeTime?: Date;
  }

  export const ComputePostupakLastChangeTimeKey =
    'ZupIt/ComputePostupakLastChangeTime';
  export interface ComputePostupakLastChangeTime {
    ID?: string;
    LastChangeTime?: Date;
  }

  export const ZahtjevZaPotvrduZupItInfoKey = 'ZupIt/ZahtjevZaPotvrduZupItInfo';
  export interface ZahtjevZaPotvrduZupItInfo {
    ID?: string;
    UlaziUZupIt?: boolean;
  }

  export const ZahtjevZaPotvrduKey = 'ZupIt/ZahtjevZaPotvrdu';
  export interface ZahtjevZaPotvrdu {
    ID?: string;
    RijesenTemeljem: boolean;
    DatumIzdavanjaOdbijanja: Date;
    SluzbenaEvidencijaID?: string;
    VrstaPotvrdeID: string;
    IspisivanjemSadrzajaBezObrasca?: boolean;
    PopunjavanjemPropisanogObrasca?: boolean;
    ElektronickaIsprava?: boolean;
    PosebnaIzrada?: boolean;
    IzdanaUZakonskomRoku?: boolean;
  }

  export const ZahtjevZaPotvrduLastChangeTimeKey =
    'ZupIt/ZahtjevZaPotvrduLastChangeTime';
  export interface ZahtjevZaPotvrduLastChangeTime {
    ID?: string;
    LastChangeTime?: Date;
    SluzbenaEvidencijaID: string;
    VrstaPotvrdeID: string;
    Godina: number;
    Mjesec: number;
  }

  export const ComputeZahtjevZaPotvrduKey = 'ZupIt/ComputeZahtjevZaPotvrdu';
  export interface ComputeZahtjevZaPotvrdu {
    ID?: string;
    Godina?: number;
    Mjesec?: number;
  }

  export const ZahtjevZaPotvrduPersistedKey = 'ZupIt/ZahtjevZaPotvrduPersisted';
  export interface ZahtjevZaPotvrduPersisted {
    ID?: string;
    Godina?: number;
    Mjesec?: number;
  }

  export const PotvrdaKey = 'ZupIt/Potvrda';
  export interface Potvrda {
    ID?: string;
    SluzbenaEvidencijaID?: string;
    VrstaPotvrdeID?: string;
    Godina?: number;
    Mjesec?: number;
    NacinIzdavanjaIspisivanjemSadrzajaBezObrasca?: boolean;
    NacinIzdavanjaPopunjavanjemPropisanogObrasca?: boolean;
    NacinIzdavanjaElektronickaIsprava?: boolean;
    NacinIzdavanjaPosebnaIzrada?: boolean;
    BrojPotvrdaIzdanihIstiDan?: number;
    BrojOdbijenihIstiDan?: number;
    BrojPotvrdaIzdanihUZakonskomRoku?: number;
    BrojPotvrdaIzdanihIzvanZakonskogRoka?: number;
  }

  export const PrigovorZupItInfoKey = 'ZupIt/PrigovorZupItInfo';
  export interface PrigovorZupItInfo {
    ID?: string;
    UlaziUZupIt?: boolean;
  }

  export const PrigovorZupItKey = 'ZupIt/PrigovorZupIt';
  export interface PrigovorZupIt {
    ID?: string;
  }

  export const PrigovorZupItPropertyKey = 'ZupIt/PrigovorZupItProperty';
  export interface PrigovorZupItProperty {
    ID?: string;
    PrigovorZupItID?: string;
    Name?: string;
    Value?: string;
  }

  export const PrigovorZupItPropertiesKey = 'ZupIt/PrigovorZupItProperties';
  export interface PrigovorZupItProperties {
    ID?: string;
  }

  export const PrigovorKey = 'ZupIt/Prigovor';
  export interface Prigovor {
    ID?: string;
    PismenoID?: string;
    CreatedTime?: Date;
    LastChangeTime?: Date;
    Name?: string;
    Value?: string;
  }

  export const PrigovorLastChangeTimeKey = 'ZupIt/PrigovorLastChangeTime';
  export interface PrigovorLastChangeTime {
    ID?: string;
    LastChangeTime?: Date;
  }

  export const ComputePrigovorLastChangeTimeKey =
    'ZupIt/ComputePrigovorLastChangeTime';
  export interface ComputePrigovorLastChangeTime {
    ID?: string;
    LastChangeTime?: Date;
  }

  export const GetPostupakZupItPropertiesKey =
    'ZupIt/GetPostupakZupItProperties';
  export interface GetPostupakZupItProperties {
    ID?: string;
  }

  export const SavePostupakZupItPropertiesResultKey =
    'ZupIt/SavePostupakZupItPropertiesResult';
  export interface SavePostupakZupItPropertiesResult {
    ID?: string;
  }

  export const SavePostupakZupItPropertiesKey =
    'ZupIt/SavePostupakZupItProperties';
  export interface SavePostupakZupItProperties {}

  export const GetPrigovorZupItPropertiesKey =
    'ZupIt/GetPrigovorZupItProperties';
  export interface GetPrigovorZupItProperties {
    ID?: string;
  }

  export const SavePrigovorZupItPropertiesResultKey =
    'ZupIt/SavePrigovorZupItPropertiesResult';
  export interface SavePrigovorZupItPropertiesResult {
    ID?: string;
  }

  export const SavePrigovorZupItPropertiesKey =
    'ZupIt/SavePrigovorZupItProperties';
  export interface SavePrigovorZupItProperties {}

  export const NijeMoguceUnijetiPismenoKojeNijeZahtjevZaPotvrduKey =
    'ZupIt/NijeMoguceUnijetiPismenoKojeNijeZahtjevZaPotvrdu';
  export interface NijeMoguceUnijetiPismenoKojeNijeZahtjevZaPotvrdu {}

  export const SystemRequiredLastChangeTimeKey =
    'ZupIt/SystemRequiredLastChangeTime';
  export interface SystemRequiredLastChangeTime {}

  export const SystemRequiredSluzbenaEvidencijaIDKey =
    'ZupIt/SystemRequiredSluzbenaEvidencijaID';
  export interface SystemRequiredSluzbenaEvidencijaID {}

  export const SystemRequiredPostupakZupItKey =
    'ZupIt/SystemRequiredPostupakZupIt';
  export interface SystemRequiredPostupakZupIt {}

  export const SystemRequiredPrigovorZupItKey =
    'ZupIt/SystemRequiredPrigovorZupIt';
  export interface SystemRequiredPrigovorZupIt {}
}
