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

export type SubClassDetailData = {
    id: string;
    name: string;
    title: string;
    subclasses: SubClasses[];
    levels: Record<number, ClassLevelData>;
    features: ClassDescription[];
    
};


export const CLASSES_DATA: Record<string, SubClassDetailData> = {
    artillerist: {
        id: 'alchemist',
        name: "Артефактор",
        title: "Творитель магических диковин",
        subclasses: [
            {
                id: "none", title: "Без подкласса", mainId: 'artificer', mainTitle: "Артефактор",            
            },
            {
                id: "alchemist", title: "Алхимик", mainId: 'artificer', mainTitle: "Артефактор",  
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
                    { name: "Магия вещей", linking: "magic_tinkering" }
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
                    { name: "Реплики магических предметов", linking: "replicate_magic_item" }
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
                    { name: "Подкласс Артефактора", linking: "artificer_subclass" }
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
                    { name: "Увеличение характеристик", linking: "ability_score_improvement_4" }
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
                    { name: "Умение подкласса", linking: "subclass_feature_5" }
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
                    { name: "Магический мастеровой", linking: "magic_item_adept" }
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
                    { name: "Проблеск гениальности", linking: "flash_of_genius" }
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
                    { name: "Увеличение характеристик", linking: "ability_score_improvement_8" }
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
                    { name: "Умение подкласса", linking: "subclass_feature_9" }
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
                    { name: "Искусник магических предметов", linking: "magic_item_savant" }
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
                    { name: "Хранящий заклинания предмет", linking: "spell_storing_item" }
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
                    { name: "Увеличение характеристик", linking: "ability_score_improvement_12" }
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
                    { name: "Изобретательность", linking: "magic_item_master" }
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
                    { name: "Умение подкласса", linking: "subclass_feature_15" }
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
                    { name: "Увеличение характеристик", linking: "ability_score_improvement_16" }
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
                    { name: "Мастер магических предметов", linking: "magic_item_master_18" }
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
                    { name: "Эпический дар", linking: "epic_boon" }
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
                    { name: "Душа творения", linking: "soul_of_artifice" }
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
                        description: "Вы сотворяете заклинания Артефактора через инструменты. Вы используете Воровские инструменты, Инструменты ремонтника или другие Ремесленные инструменты, которыми владеете, в качестве Заклинательной фокусировки. Вы должны держать такую фокусировку в руке, чтобы сотворять заклинания Артефактора. Таким образом, любое заклинание Артефактора всегда требует Материального компонента."
                    },
                    {
                        title: "Заговоры",
                        description: "Вы знаете два заговора на ваш выбор из списка заклинаний Артефактора. Каждый раз, когда вы завершаете Долгий отдых, вы можете заменить один из заговоров, полученных от этого умения, другим заговором Артефактора на ваш выбор. На 10-м и 14-м уровнях Артефактора вы изучаете ещё по одному заговору из списка заклинаний Артефактора."
                    },
                    {
                        title: "Ячейки заклинаний",
                        description: "Количество ячеек заклинаний определяется таблицей Умений Артефактора. Вы восстанавливаете все потраченные ячейки заклинаний, когда завершаете Долгий отдых."
                    },
                    {
                        title: "Подготовленные заклинания",
                        description: "Вы подготавливаете список заклинаний Артефактора 1-го уровня и выше. Для начала выберите два заклинания из списка заклинаний Артефактора. Количество подготовленных заклинаний увеличивается с получением уровней Артефактора согласно таблице Умений Артефактора. Каждое подготовленное заклинание должно быть такого уровня, для которого у вас есть ячейка заклинаний. Заклинания, которые другие умения Артефактора позволяют всегда иметь подготовленными, не учитываются в общем количестве подготовленных заклинаний, но в остальных отношениях считаются заклинаниями Артефактора. Каждый раз, когда вы завершаете Долгий отдых, вы можете заменить любое количество подготовленных заклинаний другими заклинаниями Артефактора, для которых у вас есть ячейки заклинаний."
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
                        title: "Создание предмета",
                        description: "Вы можете создать один предмет из следующего списка: Блок и лебёдка, Бумага, Ведро, Верёвка, Железные шипы, Калтропы, Кандалы, Колокольчик, Корзина, Кошель, Крюк-кошка, Кувшин, Лампа, Леска, Ломик, Лопата, Масло, Металлические шарики, Мешок, Одеяло, Охотничий капкан, Пергамент, Свеча, Сеть, Спальник, Стеклянная бутылка, Трутница, Факел, Флакон, Фляга или Шест."
                    },
                    {
                        title: "Длительность",
                        description: "Предмет существует до завершения Долгого отдыха, после чего исчезает."
                    },
                    {
                        title: "Использования",
                        description: "Количество использований равно модификатору Интеллекта (минимум 1). Все потраченные использования восстанавливаются после завершения Долгого отдыха."
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
                        description: "При получении этого умения выберите четыре схемы из таблицы Схемы магических предметов (2-й уровень Артефактора и выше). Каждый раз, когда вы получаете уровень Артефактора, вы можете заменить одну известную вам схему на другую, требованиям которой соответствуете. На определённых уровнях Артефактора вы изучаете дополнительные схемы согласно таблице Умений Артефактора."
                    },
                    {
                        title: "Создание предмета",
                        description: "После завершения Долгого отдыха вы можете создать один магический предмет или два различных, если держите в руке Инструменты ремонтника. Каждый предмет должен соответствовать известной вам схеме. Если предмет требует Настройки, вы можете настроиться на него немедленно после создания или позднее, выполнив обычный процесс Настройки. Количество одновременно создаваемых предметов определяется вашим уровнем Артефактора и таблицей Умений Артефактора. Все создаваемые предметы должны соответствовать различным известным вам схемам. Если вы создаёте новый предмет сверх допустимого количества, самый старый созданный предмет исчезает."
                    },
                    {
                        title: "Длительность",
                        description: "Созданные магические предметы функционируют как обычные предметы, но их магия непостоянна. После вашей смерти каждый созданный вами предмет исчезает через 1к4 дней. Если вы заменяете известную схему на другую, предметы, созданные по заменённой схеме, немедленно исчезают. Если созданный предмет является контейнером, всё его содержимое безвредно появляется в пространстве этого предмета и вокруг него."
                    },
                    {
                        title: "Заклинательная фокусировка",
                        description: "Вы можете использовать в качестве Заклинательной фокусировки Ремесленные инструменты, любое Оружие или Волшебную палочку, созданные вами этим умением."
                    }
                ]
            },
            {
                id: "artificer_subclass",
                name: "Подкласс Артефактора",
                level: 3,
                description: "Вы получаете подкласс Артефактора на ваш выбор. Подкласс — это специализация, которая даёт вам умения на определённых уровнях Артефактора. Вы всегда получаете все умения подкласса, уровень которых не больше вашего уровня Артефактора."
            },
            {
                id: "ability_score_improvement_4",
                name: "Увеличение характеристик",
                level: 4,
                description: "Вы получаете черту Увеличение характеристик или другую черту на ваш выбор, требованиям которой вы соответствуете."
            },
            {
                id: "subclass_feature_5",
                name: "Умение подкласса",
                level: 5,
                description: "Вы получаете все умения подкласса Артефактора 5-го уровня."
            },
            {
                id: "magic_item_adept",
                name: "Магический мастеровой",
                level: 6,
                description: "Ваше умение Реплики магических предметов получает следующие улучшения.",
                details: [
                    {
                        title: "Зарядка магического предмета",
                        description: "Бонусным действием вы можете коснуться магического предмета, созданного вашим умением Реплики магических предметов, находящегося в пределах 5 футов от вас и использующего заряды. Вы тратите ячейку заклинаний 1-го уровня или выше, после чего предмет восстанавливает количество зарядов, равное уровню потраченной ячейки."
                    },
                    {
                        title: "Вытягивание энергии магического предмета",
                        description: "Бонусным действием вы можете коснуться магического предмета, созданного вашим умением Реплики магических предметов, находящегося в пределах 5 футов от вас, и развоплотить его, преобразуя его магическую энергию в ячейку заклинаний. Если предмет Обычной редкости, вы получаете ячейку 1-го уровня. Если предмет Необычный или Редкий, вы получаете ячейку 2-го уровня. Использование восстанавливается после Долгого отдыха. Полученная ячейка исчезает после завершения Долгого отдыха."
                    },
                    {
                        title: "Преобразование магического предмета",
                        description: "Действием Магия вы можете коснуться магического предмета, созданного вашим умением Реплики магических предметов, находящегося в пределах 5 футов от вас, и преобразовать его в другой магический предмет, схема которого вам известна. Использование восстанавливается после Долгого отдыха."
                    }
                ]
            },
            {
                id: "flash_of_genius",
                name: "Проблеск гениальности",
                level: 7,
                description: "Когда вы или видимое вами существо в пределах 30 футов проваливает проверку характеристики или спасбросок, вы можете Реакцией добавить к этому броску бонус, равный вашему модификатору Интеллекта. Это может изменить результат броска на успех.",
                uses: "Модификатор Интеллекта (минимум 1).",
                recharge: "Долгий отдых."
            },
            {
                id: "ability_score_improvement_8",
                name: "Увеличение характеристик",
                level: 8,
                description: "Вы получаете черту Увеличение характеристик или другую черту на ваш выбор, требованиям которой вы соответствуете."
            },
            {
                id: "subclass_feature_9",
                name: "Умение подкласса",
                level: 9,
                description: "Вы получаете все умения подкласса Артефактора 9-го уровня."
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
                description: "Каждый раз, когда вы завершаете Долгий отдых, вы можете коснуться Простого оружия, Воинского оружия или предмета, который можете использовать в качестве Заклинательной фокусировки, и сохранить в нём заклинание Артефактора 1-го, 2-го или 3-го уровня со временем сотворения в действие. Заклинание не должно требовать Материальных компонентов, расходуемых при сотворении, и не обязательно должно находиться в вашем списке подготовленных заклинаний.",
                details: [
                    {
                        title: "Использование",
                        description: "Пока существо держит предмет, оно может действием Магия создать эффект сохранённого заклинания, используя ваш модификатор заклинательной характеристики. Если заклинание требует Концентрации, существо должно поддерживать её самостоятельно. После использования предмет нельзя использовать таким образом снова до начала следующего хода этого существа."
                    },
                    {
                        title: "Количество применений",
                        description: "Заклинание сохраняется в предмете, пока не будет использовано количество раз, равное вашему модификатору Интеллекта, умноженному на 2 (минимум 2 раза), или пока вы снова не используете это умение для сохранения заклинания в предмете."
                    }
                ]
            },
            {
                id: "ability_score_improvement_12",
                name: "Увеличение характеристик",
                level: 12,
                description: "Вы получаете черту Увеличение характеристик или другую черту на ваш выбор, требованиям которой вы соответствуете."
            },
            {
                id: "magic_item_master",
                name: "Изобретательность",
                level: 14,
                description: "Вы получаете следующие преимущества.",
                details: [
                    {
                        title: "Исследователь магических предметов",
                        description: "Вы можете настроиться одновременно на пять магических предметов."
                    },
                    {
                        title: "Отдохнувший гений",
                        description: "Вы восстанавливаете одно потраченное использование Проблеска гениальности, когда завершаете Короткий отдых."
                    }
                ]
            },
            {
                id: "subclass_feature_15",
                name: "Умение подкласса",
                level: 15,
                description: "Вы получаете все умения подкласса Артефактора 15-го уровня."
            },
            {
                id: "ability_score_improvement_16",
                name: "Увеличение характеристик",
                level: 16,
                description: "Вы получаете черту Увеличение характеристик или другую черту на ваш выбор, требованиям которой вы соответствуете."
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
                description: "Вы получаете черту из категории Эпических даров или другую черту на ваш выбор, требованиям которой вы соответствуете. Рекомендуется Дар сопротивления энергии."
            },
            {
                id: "soul_of_artifice",
                name: "Душа творения",
                level: 20,
                description: "Ваша мистическая связь с магическими предметами позволяет вам черпать помощь в их энергии. Вы получаете следующие преимущества.",
                details: [
                    {
                        title: "Обман смерти",
                        description: "Когда ваши Хиты опускаются до 0, но вы не убиты мгновенно, вы можете развоплотить любое количество созданных вашим умением Реплики магических предметов Необычных и Редких предметов. Если вы делаете это, ваши Хиты становятся равны количеству развоплощённых предметов, умноженному на 20."
                    },
                    {
                        title: "Магическое наставление",
                        description: "Когда вы завершаете Короткий отдых, вы восстанавливаете все потраченные использования Проблеска гениальности, если настроены хотя бы на один магический предмет."
                    }
                ]
            }
        ]
    }
};

export function getClassById(id: string): SubClassDetailData | undefined {
  return CLASSES_DATA[id]
}

export function getAllClassesIds(): string[] {
  return Object.keys(CLASSES_DATA)
}
