import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_orphanage')
export default class Orphanage {
  
  @PrimaryGeneratedColumn('increment', { name: 'id_orphanage' })
  id: number;

  @Column({ name: 'tx_name' })
  name: string;

  @Column({ name: 'nr_latitude' })
  latitude: number;

  @Column({ name: 'nr_longitude' })
  longitude: number;

  @Column({ name: 'tx_about' })
  about: string;

  @Column({ name: 'tx_instructions' })
  instructions: string;

  @Column({ name: 'tx_openinghours' })
  opening_hours: string;

  @Column({ name: 'fl_openonweekends' })
  open_on_weekends: boolean;
}
