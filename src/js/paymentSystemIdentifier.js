export default function paymentSystemIdentifier(card) {
  if (card.startsWith('4')) {
    return 'visa';
  };

  if (card.startsWith('51') || card.startsWith('52') || card.startsWith('53') || card.startsWith('54') || card.startsWith('55')) {
    return 'mastercard';
  };

  if (card.startsWith('34') || card.startsWith('37')) {
    return 'americanexpress';
  };

  if (card.startsWith('60') || card.startsWith('62')|| card.startsWith('64') || card.startsWith('65')) {
    return 'discover';
  };

  if (card.startsWith('35')) {
    return 'jcb';
  };

  if (card.startsWith('30') || card.startsWith('36')) {
    return 'diners';
  };

  if (card.startsWith('2')) {
    return 'mir';
  };

  return false;
}