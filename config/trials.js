/**
 * 听音选图实验 - 试次配置
 * 每个试次包含：word(单词), category(类别), distractors(2个同类干扰项)
 * 图片和音频由 SVG 图标和 Web Speech API 动态生成
 */

const PRACTICE_TRIALS = [
  {
    word: 'hat',
    category: 'clothing',
    distractors: ['shoe', 'sock']
  },
  {
    word: 'fish',
    category: 'animal',
    distractors: ['frog', 'duck']
  }
];

const FORMAL_TRIALS = [
  { word: 'apple',  category: 'fruit',    distractors: ['banana', 'orange'] },
  { word: 'dog',    category: 'animal',   distractors: ['cat', 'bird'] },
  { word: 'car',    category: 'vehicle',  distractors: ['bus', 'bike'] },
  { word: 'book',   category: 'object',   distractors: ['pen', 'bag'] },
  { word: 'sun',    category: 'nature',   distractors: ['moon', 'star'] },
  { word: 'cat',    category: 'animal',   distractors: ['dog', 'bird'] },
  { word: 'tree',   category: 'nature',   distractors: ['flower', 'leaf'] },
  { word: 'house',  category: 'building', distractors: ['school', 'church'] },
  { word: 'ball',   category: 'toy',      distractors: ['doll', 'kite'] },
  { word: 'cake',   category: 'food',     distractors: ['bread', 'cookie'] },
  { word: 'cup',    category: 'object',   distractors: ['plate', 'bowl'] },
  { word: 'rain',   category: 'weather',  distractors: ['snow', 'wind'] },
  { word: 'shirt',  category: 'clothing', distractors: ['dress', 'coat'] },
  { word: 'boat',   category: 'vehicle',  distractors: ['ship', 'plane'] },
  { word: 'egg',    category: 'food',     distractors: ['milk', 'cheese'] },
  { word: 'key',    category: 'object',   distractors: ['lock', 'door'] },
  { word: 'lamp',   category: 'object',   distractors: ['candle', 'fire'] },
  { word: 'drum',   category: 'music',    distractors: ['bell', 'horn'] },
  { word: 'cloud',  category: 'weather',  distractors: ['rain', 'snow'] },
  { word: 'hand',   category: 'body',     distractors: ['foot', 'eye'] }
];
