export const REGEXES = {
    ZIP: '^[0-9]{5}$',
    INT_NUMBER: '^[0-9]*$',
    NUMBER: '^\\s*(?=.*[0-9])[0-9]*(?:\\.[0-9]{1,})?\\s*$',
    EMAIL: '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,4})$',
    WEBSITE: '^(www\\.)?[_A-Za-z0-9-\\+]+\\.[A-Za-z]{2,4}(\\.[A-Za-z]{2,4})?$',
    CHARACTER: '^[A-Za-z0-9 ]*$',
    ALLOWANCE: '^\\s*(?=.*[0-9])[0-9]*(?:\\.[0|5]{1})?\\s*$',
    MOBILE_PHONE: '^((\\+?84|0)?((3([2-9]))|(5([689]))|(7([0|6-9]))|(8([1-5]))|(9([0-9])))([0-9]{7}))?$',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXhlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29yZS8iLCJzb3VyY2VzIjpbImxpYi9yZXNvdXJjZXMvcmVnZXhlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQVE7SUFDM0IsR0FBRyxFQUFLLFlBQVk7SUFDcEIsVUFBVSxFQUFHLFVBQVU7SUFDdkIsTUFBTSxFQUFJLDhDQUE4QztJQUN4RCxLQUFLLEVBQUksMkZBQTJGO0lBQ3BHLE9BQU8sRUFBSSxpRUFBaUU7SUFDNUUsU0FBUyxFQUFHLGlCQUFpQjtJQUM3QixTQUFTLEVBQUcsNkNBQTZDO0lBQ3pELFlBQVksRUFBRSxzRkFBc0Y7Q0FDcEcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBSRUdFWEVTOiBhbnkgPSB7XG5cdFpJUFx0XHRcdDogJ15bMC05XXs1fSQnLFxuXHRJTlRfTlVNQkVSXHQ6ICdeWzAtOV0qJCcsXG5cdE5VTUJFUlx0XHQ6ICdeXFxcXHMqKD89LipbMC05XSlbMC05XSooPzpcXFxcLlswLTldezEsfSk/XFxcXHMqJCcsXG5cdEVNQUlMXHRcdDogJ15bX0EtWmEtejAtOS1cXFxcK10rKFxcXFwuW19BLVphLXowLTktXSspKkBbQS1aYS16MC05LV0rKFxcXFwuW0EtWmEtejAtOV0rKSooXFxcXC5bQS1aYS16XXsyLDR9KSQnLFxuXHRXRUJTSVRFXHRcdDogJ14od3d3XFxcXC4pP1tfQS1aYS16MC05LVxcXFwrXStcXFxcLltBLVphLXpdezIsNH0oXFxcXC5bQS1aYS16XXsyLDR9KT8kJyxcblx0Q0hBUkFDVEVSXHQ6ICdeW0EtWmEtejAtOSBdKiQnLFxuXHRBTExPV0FOQ0VcdDogJ15cXFxccyooPz0uKlswLTldKVswLTldKig/OlxcXFwuWzB8NV17MX0pP1xcXFxzKiQnLFxuXHRNT0JJTEVfUEhPTkU6ICdeKChcXFxcKz84NHwwKT8oKDMoWzItOV0pKXwoNShbNjg5XSkpfCg3KFswfDYtOV0pKXwoOChbMS01XSkpfCg5KFswLTldKSkpKFswLTldezd9KSk/JCcsXG59O1xuIl19