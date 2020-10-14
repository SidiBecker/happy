import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Orphanage from './Orphanage';

@Entity('tb_image')
export default class Image {
  @PrimaryGeneratedColumn('increment', { name: 'id_image' })
  id: number;

  @Column({ name: 'tx_path' })
  path: string;

  @ManyToOne(() => Orphanage, (orphanage) => orphanage.images)
  @JoinColumn({ name: 'cd_orphanage' })
  orphanage: Orphanage;
}
