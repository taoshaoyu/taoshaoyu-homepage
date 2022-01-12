# kvm_init

```
kvm_init()  
    kvm_ioctl(s, KVM_GET_API_VERSION, 0);
    kvm_ioctl(s, KVM_CHECK_EXTENSION, extension);
    kvm_ioctl(s, KVM_CREATE_VM, type);
    kvm_arch_init()
        sev_kvm_init(ms->cgs, &local_err);
        tdx_kvm_init(ms->cgs, s, &local_err);
```
