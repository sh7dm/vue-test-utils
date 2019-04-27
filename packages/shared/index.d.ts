import Vue, { VNode, Component, ComponentOptions, FunctionalComponentOptions } from 'vue'

type VueClass<V extends Vue> = (new (...args: any[]) => V) & typeof Vue

type RefSelector = {
  ref: string
}

type NameSelector = {
  name: string
}

declare type Config = {
  stubs?: { [name: string]: Component | boolean | string },
  mocks?: Object,
  methods?: { [name: string]: Function },
  provide?: Object,
  silent?: boolean
}

declare type NormalizedOptions = {
  attachToDocument?: boolean,
  propsData?: Object,
  mocks: Object,
  methods: { [key: string]: Function },
  slots?: SlotsObject,
  scopedSlots?: { [key: string]: string | Function },
  localVue?: Component,
  provide?: Object | Function,
  stubs: { [name: string]: Component | true | string } | boolean,
  context?: Object,
  attrs?: { [key: string]: string },
  listeners?: { [key: string]: Function | Array<Function> },
  parentComponent?: Object,
  sync: boolean,
  shouldProxy?: boolean
}

declare type SlotValue = Component | string | Array<Component | string>

declare type SlotsObject = { [name: string]: SlotValue }

declare type Stubs =
  | {
      [name: string]: Component | true | string
    }
  | Array<string>

declare type Options = {
  attachToDocument?: boolean,
  propsData?: Object,
  mocks?: Object,
  methods?: { [key: string]: Function },
  slots?: SlotsObject,
  scopedSlots?: { [key: string]: string | Function },
  localVue?: Component,
  provide?: Object,
  stubs?: Stubs,
  context?: Object,
  attrs?: { [key: string]: string },
  listeners?: { [key: string]: Function | Array<Function> },
  parentComponent?: Object,
  sync?: boolean,
  shouldProxy?: boolean
}


declare type Selector = any
declare type Components = { [name: string]: Component }

declare interface BaseWrapper {
  at(index: number): Wrapper<Vue> | void;
  attributes(key?: string): { [name: string]: string } | string | void;
  classes(className?: string): Array<string> | boolean | void;
  contains(selector: Selector): boolean | void;
  emitted(
    event?: string
  ): { [name: string]: Array<Array<any>> } | Array<Array<any>> | void;
  emittedByOrder(): Array<{ name: string, args: Array<any> }> | void;
  exists(): boolean;
  filter(predicate: Function): WrapperArray<Vue> | void;
  find(selector: Selector): Wrapper<Vue> | void;
  findAll(selector: Selector): WrapperArray<Vue> | void;
  html(): string | void;
  is(selector: Selector): boolean | void;
  isEmpty(): boolean | void;
  isVisible(): boolean | void;
  isVueInstance(): boolean | void;
  name(): string | void;
  props(key?: string): { [name: string]: any } | any | void;
  text(): string | void;
  setData(data: Object): void;
  setMethods(methods: Object): void;
  setValue(value: any): void;
  setChecked(checked?: boolean): void;
  setSelected(): void;
  setProps(data: Object): void;
  trigger(type: string, options: Object): void;
  destroy(): void;
}

declare type WrapperOptions = {
  attachedToDocument?: boolean,
  sync?: boolean
}

export interface Wrapper<V extends Vue | null> extends BaseWrapper {
  readonly vm: V
  readonly element: HTMLElement
  readonly options: WrapperOptions

  find<R extends Vue> (selector: VueClass<R>): Wrapper<R>
  find<R extends Vue> (selector: ComponentOptions<R>): Wrapper<R>
  find (selector: FunctionalComponentOptions): Wrapper<Vue>
  find (selector: string): Wrapper<Vue>
  find (selector: RefSelector): Wrapper<Vue>
  find (selector: NameSelector): Wrapper<Vue>

  findAll<R extends Vue> (selector: VueClass<R>): WrapperArray<R>
  findAll<R extends Vue> (selector: ComponentOptions<R>): WrapperArray<R>
  findAll (selector: FunctionalComponentOptions): WrapperArray<Vue>
  findAll (selector: string): WrapperArray<Vue>
  findAll (selector: RefSelector): WrapperArray<Vue>
  findAll (selector: NameSelector): WrapperArray<Vue>

  html (): string
  text (): string
  name (): string

  emitted (): { [name: string]: Array<Array<any>> }
  emitted (event: string): Array<any>
  emittedByOrder (): Array<{ name: string, args: Array<any> }>
}

export interface WrapperArray<V extends Vue> extends BaseWrapper {
  readonly length: number;
  readonly wrappers: Array<Wrapper<V>>;

  at(index: number): Wrapper<V>;
  filter(
    predicate: (
      value: Wrapper<V>,
      index: number,
      array: Wrapper<V>[]
    ) => any
  ): WrapperArray<Vue>;
}
