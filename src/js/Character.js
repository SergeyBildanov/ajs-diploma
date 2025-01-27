/**
 * Базовый класс, от которого наследуются классы персонажей
 * @property level - уровень персонажа, от 1 до 4
 * @property attack - показатель атаки
 * @property defence - показатель защиты
 * @property health - здоровье персонажа
 * @property type - строка с одним из допустимых значений:
 * swordsman
 * bowman
 * magician
 * daemon
 * undead
 * vampire
 */
export default class Character {
  constructor(level, type = 'generic') {
    if(new.target.name === "Character"){
      throw new Error("Нельзя создать персонажа неопределенного типа!");
    }
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    if(this.level > 1){
      this.health = 100;
    }
    else{
      this.health = 50;
    }
    this.type = type;
    
    // TODO: выбросите исключение, если кто-то использует "new Character()"
  }
}
