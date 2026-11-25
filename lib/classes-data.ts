export type ClassFeature = {
    name: string;
    linking: string;
};

export type ClassLevelData = {
    proficiencyBonus: number;
    features: ClassFeature[];
    knownSchematics: number | null;
    magicItems: number | null;
    cantrips: number;
    preparedSpells: number;
    spellSlots: [number, number, number, number, number];
};

export type ClassDescription = {
    id: string;
    name: string;
    level: number;
    description: string;
    details?: ClassFeatureDetail[];
    uses?: string;
    recharge?: string;
    spells?: ClassFeatureSpell[];
    options?: ClassFeatureOption[];
    url?: string;
}

export type ClassFeatureDetail = {
    title: string;
    description: string;
    level?: number;
}

export type ClassFeatureSpell = {
    level: number;
    spells: string[];
}

export type ClassFeatureOption = {
    id: string;
    name: string;
    description: string;
}

export type SubClasses = {
    id: string;
    title: string;
    mainId: string;
    mainTitle: string;
}

export type ClassDetailData = {
    id: string;
    name: string;
    title: string;
    subclasses: SubClasses[];
    levels: Record<number, ClassLevelData>;
    features: ClassDescription[];
    
};


export const CLASSES_DATA: Record<string, ClassDetailData> = {
    artificer: {
        id: 'artificer',
        name: "Артефактор",
        title: "Творитель магических диковин",
        subclasses: [
            {
                id: "none", title: "Без подкласса", mainId: 'artificer', mainTitle: "Артефактор",            
            },
            {
                id: "artillerist", title: "Артиллерист", mainId: 'artificer', mainTitle: "Артефактор",  
            },
            {
                id: "battle-smith", title: "Боевой кузнец", mainId: 'artificer', mainTitle: "Артефактор",   
            },
            {
                id: "armorer", title: "Бронник", mainId: 'artificer', mainTitle: "Артефактор",  
            },
            {
                id: "cartographer", title: "Картограф", mainId: 'artificer', mainTitle: "Артефактор",  
            },
            {
                id: "reanimator", title: "Реаниматор", mainId: 'artificer', mainTitle: "Артефактор",  
            }               
        ],
        levels: {
            1: {
                proficiencyBonus: 2,
                features: [
                    { name: "Сотворение заклинаний", linking: "spellcasting" },
                    { name: "Магия вещей", linking: "tinkers-magic" }
                ],
                knownSchematics: null,
                magicItems: null,
                cantrips: 2,
                preparedSpells: 2,
                spellSlots: [2, 0, 0, 0, 0]
            },
            2: {
                proficiencyBonus: 2,
                features: [
                    { name: "Реплики магических предметов", linking: "replicate-magic-item" }
                ],
                knownSchematics: 4,
                magicItems: 2,
                cantrips: 2,
                preparedSpells: 3,
                spellSlots: [2, 0, 0, 0, 0]
            },
            3: {
                proficiencyBonus: 2,
                features: [
                    { name: "Подкласс Артефактора", linking: "artificer-subclass" }
                ],
                knownSchematics: 4,
                magicItems: 2,
                cantrips: 2,
                preparedSpells: 4,
                spellSlots: [3, 0, 0, 0, 0]
            },
            4: {
                proficiencyBonus: 2,
                features: [
                    { name: "Увеличение характеристик", linking: "ASI-4" }
                ],
                knownSchematics: 4,
                magicItems: 2,
                cantrips: 2,
                preparedSpells: 5,
                spellSlots: [3, 0, 0, 0, 0]
            },
            5: {
                proficiencyBonus: 3,
                features: [
                    { name: "Умение подкласса", linking: "subclass-5" }
                ],
                knownSchematics: 4,
                magicItems: 2,
                cantrips: 2,
                preparedSpells: 6,
                spellSlots: [4, 2, 0, 0, 0]
            },
            6: {
                proficiencyBonus: 3,
                features: [
                    { name: "Магический мастеровой", linking: "magic-item-tinker" }
                ],
                knownSchematics: 5,
                magicItems: 3,
                cantrips: 2,
                preparedSpells: 6,
                spellSlots: [4, 2, 0, 0, 0]
            },
            7: {
                proficiencyBonus: 3,
                features: [
                    { name: "Проблеск гениальности", linking: "flash-of-genius" }
                ],
                knownSchematics: 5,
                magicItems: 3,
                cantrips: 2,
                preparedSpells: 7,
                spellSlots: [4, 3, 0, 0, 0]
            },
            8: {
                proficiencyBonus: 3,
                features: [
                    { name: "Увеличение характеристик", linking: "ASI-8" }
                ],
                knownSchematics: 5,
                magicItems: 3,
                cantrips: 2,
                preparedSpells: 7,
                spellSlots: [4, 3, 0, 0, 0]
            },
            9: {
                proficiencyBonus: 4,
                features: [
                    { name: "Умение подкласса", linking: "subclass-9" }
                ],
                knownSchematics: 5,
                magicItems: 3,
                cantrips: 2,
                preparedSpells: 9,
                spellSlots: [4, 3, 2, 0, 0]
            },
            10: {
                proficiencyBonus: 4,
                features: [
                    { name: "Искусник магических предметов", linking: "magic-item-adept" }
                ],
                knownSchematics: 6,
                magicItems: 4,
                cantrips: 3,
                preparedSpells: 9,
                spellSlots: [4, 3, 2, 0, 0]
            },
            11: {
                proficiencyBonus: 4,
                features: [
                    { name: "Хранящий заклинания предмет", linking: "spell-storing-item" }
                ],
                knownSchematics: 6,
                magicItems: 4,
                cantrips: 3,
                preparedSpells: 10,
                spellSlots: [4, 3, 3, 0, 0]
            },
            12: {
                proficiencyBonus: 4,
                features: [
                    { name: "Увеличение характеристик", linking: "ASI-12" }
                ],
                knownSchematics: 6,
                magicItems: 4,
                cantrips: 3,
                preparedSpells: 10,
                spellSlots: [4, 3, 3, 0, 0]
            },
            13: {
                proficiencyBonus: 5,
                features: [],
                knownSchematics: 6,
                magicItems: 4,
                cantrips: 3,
                preparedSpells: 11,
                spellSlots: [4, 3, 3, 1, 0]
            },
            14: {
                proficiencyBonus: 5,
                features: [
                    { name: "Изобретательность", linking: "advanced-artifice" }
                ],
                knownSchematics: 7,
                magicItems: 5,
                cantrips: 4,
                preparedSpells: 11,
                spellSlots: [4, 3, 3, 1, 0]
            },
            15: {
                proficiencyBonus: 5,
                features: [
                    { name: "Умение подкласса", linking: "subclass-15" }
                ],
                knownSchematics: 7,
                magicItems: 5,
                cantrips: 4,
                preparedSpells: 12,
                spellSlots: [4, 3, 3, 2, 0]
            },
            16: {
                proficiencyBonus: 5,
                features: [
                    { name: "Увеличение характеристик", linking: "ASI-16" }
                ],
                knownSchematics: 7,
                magicItems: 5,
                cantrips: 4,
                preparedSpells: 12,
                spellSlots: [4, 3, 3, 2, 0]
            },
            17: {
                proficiencyBonus: 6,
                features: [],
                knownSchematics: 7,
                magicItems: 5,
                cantrips: 4,
                preparedSpells: 14,
                spellSlots: [4, 3, 3, 3, 1]
            },
            18: {
                proficiencyBonus: 6,
                features: [
                    { name: "Мастер магических предметов", linking: "magic-item-master" }
                ],
                knownSchematics: 8,
                magicItems: 6,
                cantrips: 4,
                preparedSpells: 14,
                spellSlots: [4, 3, 3, 3, 1]
            },
            19: {
                proficiencyBonus: 6,
                features: [
                    { name: "Эпический дар", linking: "epic-boon" }
                ],
                knownSchematics: 8,
                magicItems: 6,
                cantrips: 4,
                preparedSpells: 15,
                spellSlots: [4, 3, 3, 3, 2]
            },
            20: {
                proficiencyBonus: 6,
                features: [
                    { name: "Душа творения", linking: "soul-of-artifice" }
                ],
                knownSchematics: 8,
                magicItems: 6,
                cantrips: 4,
                preparedSpells: 15,
                spellSlots: [4, 3, 3, 3, 2]
            }
        },
        features: [
            {
                id: "spellcasting",
                name: "Сотворение заклинаний",
                level: 1,
                description: "Вы научились сотворять заклинания, пропуская магическую энергию через предметы.",
                details: [
                    {
                        title: "Требуются инструменты",
                        description: "Вы сотворяете заклинания Артефактора через инструменты. Вы используете Воровские инструменты, Инструменты ремонтника или другие Ремесленные инструменты, которыми владеете, в качестве Заклинательной фокусировки."
                    },
                    {
                        title: "Заговоры",
                        description: "Вы знаете два заговора на ваш выбор из списка заклинаний Артефактора. Каждый раз, когда вы завершаете Долгий отдых, вы можете заменить один заговор другим."
                    },
                    {
                        title: "Ячейки заклинаний",
                        description: "Вы восстанавливаете все потраченные ячейки заклинаний, когда завершаете Долгий отдых."
                    },
                    {
                        title: "Подготовленные заклинания",
                        description: "Вы подготавливаете список заклинаний Артефактора 1-го уровня и выше. Начальное количество — два заклинания."
                    },
                    {
                        title: "Заклинательная характеристика",
                        description: "Интеллект."
                    }
                ]
            },
            {
                id: "magic_tinkering",
                name: "Магия вещей",
                level: 1,
                description: "Вы знаете заговор Починка. Пока вы держите в руках Инструменты ремонтника, действием Магия можете создать один предмет из специального списка в незанятом пространстве в пределах 5 футов от вас.",
                details: [
                    {
                        title: "Длительность",
                        description: "Предмет существует до завершения Долгого отдыха, после чего исчезает."
                    },
                    {
                        title: "Использования",
                        description: "Количество использований равно модификатору Интеллекта (минимум 1). Все использования восстанавливаются после Долгого отдыха."
                    }
                ]
            },
            {
                id: "replicate_magic_item",
                name: "Реплики магических предметов",
                level: 2,
                description: "Вы изучаете мистические схемы, позволяющие создавать магические предметы.",
                details: [
                    {
                        title: "Известные схемы",
                        description: "При получении этого умения выберите четыре схемы магических предметов. При получении уровня Артефактора можно заменить одну известную схему."
                    },
                    {
                        title: "Создание предмета",
                        description: "После Долгого отдыха можно создать один магический предмет или два различных, если держать в руке Инструменты ремонтника."
                    },
                    {
                        title: "Длительность",
                        description: "Созданные предметы исчезают через 1к4 дней после вашей смерти. При замене схемы предметы, созданные по ней, немедленно исчезают."
                    },
                    {
                        title: "Заклинательная фокусировка",
                        description: "Вы можете использовать в качестве Заклинательной фокусировки Ремесленные инструменты, любое Оружие или Волшебную палочку, созданные этим умением."
                    }
                ]
            },
            {
                id: "reanimator_spells",
                name: "Заклинания Реаниматора",
                level: 3,
                description: "С момента достижения указанного уровня Артефактора соответствующие заклинания всегда подготовлены.",
                spells: [
                    {
                        level: 3,
                        spells: [
                            "Ведьмин снаряд",
                            "Псевдожизнь",
                            "Уход за умирающим"
                        ]
                    },
                    {
                        level: 5,
                        spells: [
                            "Глухота/слепота",
                            "Улучшение характеристики"
                        ]
                    },
                    {
                        level: 9,
                        spells: [
                            "Молния",
                            "Поднятие мертвеца"
                        ]
                    },
                    {
                        level: 13,
                        spells: [
                            "Защита от смерти",
                            "Усыхание"
                        ]
                    },
                    {
                        level: 17,
                        spells: [
                            "Возвращение к жизни",
                            "Преграда жизни"
                        ]
                    }
                ]
            },
            {
                id: "reanimator_features",
                name: "Навыки Реаниматора",
                level: 3,
                description: "Вы получаете следующие преимущества.",
                details: [
                    {
                        title: "Оживляющий разряд",
                        description: "Когда вы сотворяете Уход за умирающим, можете изменить его, чтобы послать электрический разряд. Цель восстанавливает Хиты в количестве, равном вашему уровню Артефактора. Каждое существо в 10-футовой Эманации совершает спасбросок Ловкости. При провале получает 2к4 урона Электричеством, при успехе — половину."
                    },
                    {
                        title: "Инструменты Реаниматора",
                        description: "Вы получаете владение Инструментами алхимика. Если уже владеете ими, получаете владение другим типом Ремесленных инструментов."
                    }
                ]
            },
            {
                id: "reanimated_companion",
                name: "Реанимированный спутник",
                level: 3,
                description: "Используя Инструменты ремонтника или другие Ремесленные инструменты, вы можете действием Магия создать Реанимированного спутника. Спутник появляется в незанятом пространстве в пределах 5 футов от вас.",
                details: [
                    {
                        title: "Продолжительность",
                        description: "Спутник существует до завершения Долгого отдыха или пока вы не отпустите его действием Магия."
                    },
                    {
                        title: "Спутник в бою",
                        description: "Спутник может перемещаться и использовать Реакцию самостоятельно. Единственное действие в свой ход — Уклонение, если вы не прикажете ему совершить другое действие Бонусным действием."
                    }
                ]
            },
            {
                id: "ability_score_improvement_4",
                name: "Увеличение характеристик",
                level: 4,
                description: "Вы получаете черту Увеличение характеристик или другую черту на ваш выбор, требованиям которой соответствуете."
            },
            {
                id: "strange_modifications",
                name: "Чуждые модификации",
                level: 5,
                description: "Когда вы создаёте Реанимированного спутника, он получает один вариант модификации на ваш выбор.",
                details: [
                    {
                        title: "Магический проводник",
                        description: "Вы можете сотворять заклинания так, как если бы находились в пространстве спутника. Один раз за ход можете добавить модификатор Интеллекта к одному броску урона заклинания Воплощения или Некромантии."
                    },
                    {
                        title: "Свирепость",
                        description: "Кость урона Ужасающего замаха спутника увеличивается до 1к6."
                    }
                ]
            },
            {
                id: "magic_item_adept",
                name: "Магический мастеровой",
                level: 6,
                description: "Ваше умение Реплики магических предметов получает следующие улучшения.",
                details: [
                    {
                        title: "Зарядка магического предмета",
                        description: "Бонусным действием вы можете восстановить заряды магического предмета, созданного вашим умением Реплики магических предметов, потратив ячейку заклинаний."
                    },
                    {
                        title: "Вытягивание энергии",
                        description: "Бонусным действием можете развоплотить созданный предмет и получить ячейку заклинаний. Использование восстанавливается после Долгого отдыха."
                    },
                    {
                        title: "Преобразование предмета",
                        description: "Действием Магия можете преобразовать созданный магический предмет в другой предмет, схема которого вам известна."
                    }
                ]
            },
            {
                id: "flash_of_genius",
                name: "Проблеск гениальности",
                level: 7,
                description: "Когда вы или видимое вами существо в пределах 30 футов проваливает проверку характеристики или спасбросок, вы можете Реакцией добавить бонус, равный модификатору Интеллекта.",
                uses: "Модификатор Интеллекта (минимум 1).",
                recharge: "Долгий отдых."
            },
            {
                id: "ability_score_improvement_8",
                name: "Увеличение характеристик",
                level: 8,
                description: "Вы получаете черту Увеличение характеристик или другую черту на ваш выбор."
            },
            {
                id: "improved_reanimation",
                name: "Улучшенная реанимация",
                level: 9,
                description: "Урон Взрыва смерти спутника увеличивается до 4к4. Некротический урон спутника игнорирует Сопротивление."
            },
            {
                id: "horrifying_modifications",
                name: "Ужасные модификации",
                level: 9,
                description: "Спутник получает два варианта Чуждых модификаций вместо одного.",
                details: [
                    {
                        title: "Раздутый",
                        description: "Спутник становится Большого размера. Попадание Ужасающим замахом отталкивает цель на расстояние до 10 футов."
                    },
                    {
                        title: "Тощий",
                        description: "Скорость спутника увеличивается до 45 футов. Он получает Скорость лазания и может перемещаться по потолкам."
                    },
                    {
                        title: "Влажный",
                        description: "Спутник получает Скорость плавания и может проходить через пространство шириной 1 дюйм. Атакующие его существа получают урон Кислотой."
                    }
                ]
            },
            {
                id: "magic_item_savant",
                name: "Искусник магических предметов",
                level: 10,
                description: "Вы можете настроиться одновременно на четыре магических предмета."
            },
            {
                id: "spell_storing_item",
                name: "Хранящий заклинания предмет",
                level: 11,
                description: "После Долгого отдыха вы можете сохранить заклинание Артефактора 1-го, 2-го или 3-го уровня в Простом оружии, Воинском оружии или предмете, используемом как Заклинательная фокусировка.",
                details: [
                    {
                        title: "Использование",
                        description: "Существо, держащее предмет, может действием Магия создать эффект сохранённого заклинания."
                    },
                    {
                        title: "Количество применений",
                        description: "Количество использований равно модификатору Интеллекта, умноженному на 2 (минимум 2)."
                    }
                ]
            },
            {
                id: "ability_score_improvement_12",
                name: "Увеличение характеристик",
                level: 12,
                description: "Вы получаете черту Увеличение характеристик или другую черту на ваш выбор."
            },
            {
                id: "magic_item_master",
                name: "Изобретательность",
                level: 14,
                description: "Вы можете настроиться одновременно на пять магических предметов. Кроме того, восстанавливаете одно использование Проблеска гениальности после Короткого отдыха."
            },
            {
                id: "perfected_reanimation",
                name: "Отточенная реанимация",
                level: 15,
                description: "Вы овладели наукой возвращения к жизни.",
                details: [
                    {
                        title: "Облегчённое воскрешение",
                        description: "Вы можете сотворить Возвращение к жизни без траты ячейки и Материальных компонентов один раз за Долгий отдых."
                    },
                    {
                        title: "Перекачивание жизни",
                        description: "Когда получаете урон, можете Реакцией восстановить Хиты в количестве, равном текущим Хитам спутника. Спутник при этом умирает и активирует Взрыв смерти."
                    },
                    {
                        title: "Совершенные модификации",
                        description: "Спутник получает три варианта Чуждых модификаций."
                    }
                ]
            },
            {
                id: "ability_score_improvement_16",
                name: "Увеличение характеристик",
                level: 16,
                description: "Вы получаете черту Увеличение характеристик или другую черту на ваш выбор."
            },
            {
                id: "magic_item_master_18",
                name: "Мастер магических предметов",
                level: 18,
                description: "Вы можете настроиться одновременно на шесть магических предметов."
            },
            {
                id: "epic_boon",
                name: "Эпический дар",
                level: 19,
                description: "Вы получаете черту из категории Эпических даров или другую черту на ваш выбор. Рекомендуется Дар сопротивления энергии."
            },
            {
                id: "soul_of_artifice",
                name: "Душа творения",
                level: 20,
                description: "Ваша мистическая связь с магическими предметами позволяет вам черпать помощь в их энергии.",
                details: [
                    {
                        title: "Обман смерти",
                        description: "Когда ваши Хиты опускаются до 0, можете развоплотить любое количество созданных Необычных и Редких магических предметов. За каждый предмет восстанавливаете 20 Хитов."
                    },
                    {
                        title: "Магическое наставление",
                        description: "После Короткого отдыха восстанавливаете все использования Проблеска гениальности, если настроены хотя бы на один магический предмет."
                    }
                ]
            }
        ]
    }
};

export function getClassById(id: string): ClassDetailData | undefined {
  return CLASSES_DATA[id]
}

export function getAllClassesIds(): string[] {
  return Object.keys(CLASSES_DATA)
}
