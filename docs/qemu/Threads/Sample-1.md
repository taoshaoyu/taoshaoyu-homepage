# Sample-1

## Command

```
/usr/local/qemu/bin/qemu-system-x86_64 --no-reboot -nodefaults -device pc-testdev -device isa-debug-exit,iobase=0xf4,iosize=0x4 -vnc none -serial st
dio -device pci-testdev -machine accel=kvm -kernel ./x86/xsave.flat
```

