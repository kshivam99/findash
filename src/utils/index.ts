export const convertToCamelCase = (label: string): string => {
    const cleanedLabel = label.replace(/\s+/g, '');
    return cleanedLabel[0].toLowerCase() + cleanedLabel.substring(1)
  };