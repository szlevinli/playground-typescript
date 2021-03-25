export interface Node {
  id: number;
  label: string;
  // 行政区级别
  //  S: 国家; P: 省; C: 市; D: 区
  region: 'S' | 'P' | 'C' | 'D';
  children: Node[];
}
