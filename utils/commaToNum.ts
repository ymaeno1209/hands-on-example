/**
 * カンマ区切りの文字列を数値に変換します
 */
export const commaToNum = (str: string) => {
  const noCommaStr = str.replaceAll(",", "");
  // replace()からreplaceall()に修正
  return Number(noCommaStr);
};
